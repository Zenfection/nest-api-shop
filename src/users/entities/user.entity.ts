import { ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  role: UserRole;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string | null;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
