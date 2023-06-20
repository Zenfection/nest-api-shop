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
  @ApiProperty({
    description: 'Email of the user',
    example: 'user123@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Fullname of the user', example: 'Le Tuan Kiet' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  fullname: string;

  @ApiProperty({ description: 'Password of the user', example: '12345678' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password: string;

  @ApiProperty({ description: 'Username of the user', example: 'user123' })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  username: string;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '0123456789',
  })
  @IsOptional()
  @IsPhoneNumber('VN')
  phone: string;
}
