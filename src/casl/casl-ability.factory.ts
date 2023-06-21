import {
  AbilityBuilder,
  ExtractSubjectType,
  InferSubjects,
  defineAbility,
  MongoAbility,
  createMongoAbility,
} from '@casl/ability';
import { UserRole } from '@prisma/client';
import { UserEntity } from '../../src/users/entities/user.entity';

export enum Action {
  Manage = 'manage', // CRUD
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof UserEntity> | UserEntity | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

export class CaslAbilityFactory {
  createForUser(user: UserEntity) {
    return defineAbility((can, cannot) => {
      if (user.role === UserRole.ADMIN) {
        can(Action.Manage, 'all');
      } else {
        can(Action.Read, 'all');
        can(Action.Update, UserEntity, { id: user.id });
        cannot(Action.Delete, UserEntity).because(
          'only admins can delete users',
        );
        // cannot(Action.Update, UserEntity, { id: { $ne: user.id } }).because(
        //   'You can only update your own user',
        // );
      }
    });
    // const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
    // if (user.role === UserRole.ADMIN) {
    //   can(Action.Manage, 'all');
    // } else {
    //   can(Action.Read, 'all');
    //   can(Action.Update, UserEntity);
    //   cannot(Action.Delete, UserEntity).because('You cannot delete users');
    //   // cannot(Action.Update, UserEntity, { id: { $ne: user.id } }).because(
    //   //   'You can only update your own user',
    //   // );
    // }
    // return build({
    //   detectSubjectType: (item) =>
    //     item.constructor as ExtractSubjectType<Subjects>,
    // });
  }
}
