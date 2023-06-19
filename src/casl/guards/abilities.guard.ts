import { CaslAbilityFactory } from './../casl-ability.factory';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ABILITY_KEY, IAbilityMeta } from '../decorators/abilities.decorator';
import { ForbiddenError } from '@casl/ability';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly caslAbilityFactory: CaslAbilityFactory,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const rules =
      this.reflector.get<IAbilityMeta[]>(ABILITY_KEY, context.getHandler()) ||
      [];

    const user = context.switchToHttp().getRequest().user;
    const ability = this.caslAbilityFactory.createForUser(user);

    try {
      rules.forEach((rule) => {
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject);
      });
      return true;
      // return rules.every((rule) => {
      //   const { action, subject } = rule;
      //   return ability.can(action, subject);
      // });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
    return true;
  }
}
