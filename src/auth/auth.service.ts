import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../src/users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  validateUser(destination: string) {
    const user = this.usersService.findOneByEmail(destination);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  generateToken(user: User) {
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // async login(email: string, password: string): Promise<AuthEntity> {
  //   const user = await this.prisma.user.findUnique({
  //     where: { email },
  //   });

  //   if (!user) {
  //     throw new NotFoundException(`User not found for emai: ${email}`);
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);

  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException('Invalid password');
  //   }

  //   return {
  //     accessToken: this.jwtService.sign({ userId: user.id }),
  //   };
  // }
}
