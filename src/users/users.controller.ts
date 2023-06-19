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
  ForbiddenException,
  UseGuards,
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
  Action,
  CaslAbilityFactory,
} from '../../src/casl/casl-ability.factory';
import { ForbiddenError } from '@casl/ability';
import { Abilities } from '../../src/casl/decorators/abilities.decorator';
import { AbilitiesGuard } from '../../src/casl/guards/abilities.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly caslAbilityFactory: CaslAbilityFactory,
  ) {}

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
    // const user = req.user;
    // console.log(user);
    // const ability = this.abilityFactory.defineAbility(user);
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
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req: any,
  ) {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    const userUpdate = await this.usersService.findOne({ id });
    try {
      ForbiddenError.from(ability).throwUnlessCan(Action.Update, userUpdate);
      return this.usersService.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  @Abilities({ action: Action.Delete, subject: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id });
  }
}
