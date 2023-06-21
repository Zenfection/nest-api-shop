import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationQueryDto } from '../../src/common/dto/pagination-query.dto';

export const roundsOfHasing = 10;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, roundsOfHasing);

    data.password = hashedPassword;

    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(params: PaginationQueryDto) {
    const { skip, take } = params;
    const users = await this.prisma.user.findMany({
      skip,
      take,
    });
    users.filter((user) => {
      delete user.password;
    });
    return users;
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({
      where,
    });
    // const { password, ...result } = user;
    return user;
  }

  findOneByEmail(email: string) {
    const user = this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    // const { password, ...result } = user;
    return user;
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto;
  }): Promise<User> {
    const { where, data } = params;

    if (data.password) {
      data.password = await bcrypt.hash(data.password, roundsOfHasing);
    }

    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.delete({
      where,
    });
    const { password, ...result } = user;
    return result;
  }
}
