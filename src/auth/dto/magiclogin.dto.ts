import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class MagicLoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  destination: string;
}
