import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'nestjs-prisma';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = await controller.findAll();
      expect(users).toBeInstanceOf(Array);
    });
  });

  describe('findOne', () => {
    it('should return a user when correct id', async () => {
      const id = '17711714-5f83-4f2d-8972-3372964fcf13';
      const user = await controller.findOne(id);
      expect(user).toBeDefined();
    });

    it('should throw NotFound when wrong id', async () => {
      const id = '123';
      try {
        return await controller.findOne(id);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
        if (err instanceof NotFoundException) {
          expect(err.message).toEqual(`${id} not found`);
        }
      }
    });
  });

  describe('update', () => {
    it('should update a user when correct id', async () => {
      const id = '17711714-5f83-4f2d-8972-3372964fcf13';
      const user = await controller.update(id, {
        fullname: 'John Doe',
      });
      expect(user).toBeDefined();
    });

    it('should throw PrismaClientKnownRequestError when wrong id', async () => {
      const id = '123';
      const fullname = 'John Doe';
      try {
        return await controller.update(id, {
          fullname,
        });
      } catch (err) {
        expect(err).toBeInstanceOf(Prisma.PrismaClientKnownRequestError);
      }
    });
  });

  describe('remove', () => {
    it('should remove a user when correct id', async () => {
      const id = '17711714-5f83-4f2d-8972-3372964fcf13';
      const user = await controller.remove(id);
      expect(user).toBeDefined();
    });

    it('should throw PrismaClientKnownRequestError when wrong id', async () => {
      const id = '123';
      try {
        return await controller.remove(id);
      } catch (err) {
        expect(err).toBeInstanceOf(Prisma.PrismaClientKnownRequestError);
      }
    });
  });
});
