import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../../src/users/users.module';
import { MagicloginStrategy } from './magiclogin.strategy';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [authConfig],
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '5m' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, MagicloginStrategy, JwtStrategy],
})
export class AuthModule {}
