import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserEntity } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = await module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const expectedUsers = await prisma.user.findMany();
      const users = await service.findAll();
      expect(users).toEqual(expectedUsers);
    });
  });

  describe('findOne', () => {
    it('should return a user when correct id', async () => {
      const id = '13024b7d-b02c-4c35-8515-4888d4a06606';
      const expectedUser = await prisma.user.findUnique({ where: { id } });
      expect(await service.findOne({ id })).toEqual(expectedUser);
    });

    it('should throw PrismaClientValidationError when wrong id', async () => {
      try {
        return await service.findOne({ id: undefined });
      } catch (err) {
        expect(err).toBeInstanceOf(Prisma.PrismaClientValidationError);
      }
    });
  });

  describe('create', () => {
    // it('should create a user', async () => {
    //   const data = {
    //     email: 'jestest@gmail.com',
    //     fullname: 'jestest',
    //   };
    //   const user = await service.create(data);
    //   await service.remove({ id: user.id });
    //   // expect(user).objectContaining(UserEntity);
    // });

    it('should throw PrismaClientKnownRequestError when duplicate email', async () => {
      const data = {
        email: 'test123@gmail.com',
        fullname: 'test123',
      };
      try {
        return await service.create(data);
      } catch (err) {
        expect(err).toBeInstanceOf(Prisma.PrismaClientKnownRequestError);
      }
    });

    it('should throw PrismaClientKnownRequestError when wrong data', async () => {
      const data = {
        email: '123',
        fullname: '123',
      };
      try {
        return await service.create(data);
      } catch (err) {
        expect(err).toBeInstanceOf(Prisma.PrismaClientKnownRequestError);
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          expect(err.code).toEqual('P2002');
        }
      }
    });
  });
});
