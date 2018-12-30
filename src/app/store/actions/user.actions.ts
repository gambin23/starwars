import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export class Login implements Action {
  readonly type = USER_LOGIN;

  constructor(public payload: User) {
  }
}

export class Logout implements Action {
  readonly type = USER_LOGOUT;

  constructor() {
  }
}

export type Actions = Login | Logout;
