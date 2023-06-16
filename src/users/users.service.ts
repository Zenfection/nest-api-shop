import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private handlePrismaError(error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new BadRequestException('There is a unique constraint violation');
      } else {
        throw new BadRequestException(`Prisma Error: ${error.message}`);
      }
    } else {
      throw new HttpException(error, 500);
    }
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      const result = await this.prisma.user.create({
        data,
      });
      return result;
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      const result = await this.prisma.user.findUnique({
        where,
      });
      if (!result) {
        throw new NotFoundException(`${where.id} not found`);
      }
      return result;
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    try {
      return await this.prisma.user.update({
        data,
        where,
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where,
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }
}
