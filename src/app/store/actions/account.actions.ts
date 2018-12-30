import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOGIN_TRY = 'LOGIN_TRY';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_TRY = 'LOGOUT_TRY';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export class LoginTry implements Action {
  readonly type = LOGIN_TRY;
  constructor(public payload: User) { }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: User) { }
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) { }
}

export class LogoutTry implements Action {
  readonly type = LOGOUT_TRY;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export type Actions =
  LoginTry
  | LoginSuccess
  | LoginFail
  | LogoutTry
  | LogoutSuccess;
