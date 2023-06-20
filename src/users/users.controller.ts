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
  ForbiddenException,
  Query,
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
import {
  Abilities,
  DeleteUserAbility,
  ReadUserAbility,
  UpdateUserAbility,
} from '../../src/casl/decorators/abilities.decorator';
import { PaginationQueryDto } from '../../src/common/dto/pagination-query.dto';

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
  findAll(@Query() pagination: PaginationQueryDto) {
    return this.usersService.findAll(pagination);
  }

  @Get(':id')
  @Abilities(new ReadUserAbility())
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
  @Abilities(new UpdateUserAbility())
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req: any,
  ) {
    if (req.user.role !== 'ADMIN' && req.user.id !== id) {
      throw new ForbiddenException(`You only can update your own user`);
    }
    return this.usersService.update({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  @Abilities(new DeleteUserAbility())
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id });
  }
}
