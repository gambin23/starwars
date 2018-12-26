import { Action } from '@ngrx/store';

export const ADD_FAVOURITE = '[FAVOURITE] ADD';
export const DELETE_FAVOURITE = '[FAVOURITE] DELETE';

export class AddFavourite implements Action {
  readonly type = ADD_FAVOURITE;

  constructor(public payload: string) {

  }
}

export class DeleteFavourite implements Action {
  readonly type = DELETE_FAVOURITE;

  constructor(public payload: string) {

  }
}

export type Actions = AddFavourite | DeleteFavourite;
