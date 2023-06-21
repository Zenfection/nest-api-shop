import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MagicloginStrategy extends PassportStrategy(
  Strategy,
  'magiclogin',
) {
  private readonly logger = new Logger(MagicloginStrategy.name);
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      secret: configService.get<string>('MAGIC_LOGIN_SECRET'),
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackUrl: 'http://localhost:3000/auth/login/callback',
      sendMagicLink: async (destination, href) => {
        //TODO send email
        this.logger.debug(`sendMagicLink: ${destination} => ${href}`);
      },
      verify: async (payload, callback) => {
        callback(null, this.validate(payload));
      },
    });
  }
  validate(payload: { destination: string }) {
    const user = this.authService.validateUser(payload.destination);
    return user;
  }
}
