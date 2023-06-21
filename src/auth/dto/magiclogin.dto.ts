import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class MagicLoginDto {
  @IsEmail()
  @ApiProperty()
  destination: string;
}
