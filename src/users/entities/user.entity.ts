import { ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@prisma/client';
import { IsOptional } from 'class-validator';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  role: UserRole;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsOptional()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
