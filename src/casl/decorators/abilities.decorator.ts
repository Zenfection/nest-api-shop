import { SetMetadata } from '@nestjs/common';
import { Action, Subjects } from '../casl-ability.factory';
import { UserEntity } from '../../../src/users/entities/user.entity';

export interface IAbilityMeta {
  action: Action;
  subject: Subjects;
}

export const ABILITY_KEY = 'abilities';
export const Abilities = (...args: IAbilityMeta[]) =>
  SetMetadata(ABILITY_KEY, args);

export class ReadUserAbility implements IAbilityMeta {
  action = Action.Read;
  subject = UserEntity;
}

export class CreateUserAbility implements IAbilityMeta {
  action: Action.Create;
  subject: Subjects;
}

export class UpdateUserAbility implements IAbilityMeta {
  action: Action.Update;
  subject: Subjects;
}

export class DeleteUserAbility implements IAbilityMeta {
  action: Action.Delete;
  subject: Subjects;
}
