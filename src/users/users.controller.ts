import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { Public } from '../../src/common/decorators/public.decorator';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Public()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Public()
  @ApiOkResponse({ type: [UserEntity] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne({ id });
    if (!user) {
      throw new NotFoundException(`${id} not found`);
    }
    return user;
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req: any,
  ) {
    const userId = req.user.id;
    if (userId !== id) {
      throw new BadRequestException(`You can't update this ${id}`);
    }
    return this.usersService.update({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req: any) {
    const userId = req.user.id;
    if (userId !== id) {
      throw new BadRequestException(`You can't delete this ${id}`);
    }
    return this.usersService.remove({ id });
  }
}
