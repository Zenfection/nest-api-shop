import { SetMetadata } from '@nestjs/common';
import { Action, Subjects } from '../casl-ability.factory';

export interface IAbilityMeta {
  action: Action;
  subject: Subjects;
}

export const ABILITY_KEY = 'abilities';
export const Abilities = (...args: IAbilityMeta[]) =>
  SetMetadata(ABILITY_KEY, args);
