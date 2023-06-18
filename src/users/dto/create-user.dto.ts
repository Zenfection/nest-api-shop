import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email of the user' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Fullname of the user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  fullname: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  username: string;

  @IsOptional()
  @IsPhoneNumber('VN')
  phone: string;
}
