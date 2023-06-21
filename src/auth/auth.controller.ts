import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Public } from '../../src/common/decorators/public.decorator';
import { MagicloginStrategy } from './magiclogin.strategy';
import { AuthGuard } from '@nestjs/passport';
import { MagicLoginDto } from './dto/magiclogin.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicloginStrategy,
  ) {}

  @Public()
  @Post('login')
  @ApiOkResponse({ type: LoginDto })
  login(@Req() req, @Res() res, @Body() body: MagicLoginDto) {
    this.authService.validateUser(body.destination);
    return this.strategy.send(req, res);
  }

  // @Public()
  // @Post('magiclogin')
  // // @ApiOkResponse({ type: LoginDto })
  // magiclogin(@Req() req, @Res() res) {
  //   return this.strategy.send(req, res);
  // }

  @UseGuards(AuthGuard('magiclogin'))
  @Public()
  @Get('login/callback')
  callback(@Req() req) {
    return this.authService.generateToken(req.user);
  }
}
