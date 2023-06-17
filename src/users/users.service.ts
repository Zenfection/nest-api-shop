import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // async findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   // cursor?: Prisma.UserWhereUniqueInput;
  //   // where?: Prisma.UserWhereInput;
  //   // orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<User[]> {
  //   // const { skip, take, cursor, where, orderBy } = params;
  //   // const { skip, take } = params;
  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     // cursor,
  //     // where,
  //     // orderBy,
  //   });
  // }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prisma.user.delete({
      where,
    });
  }
}
