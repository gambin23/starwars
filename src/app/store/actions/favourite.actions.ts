import { Action } from '@ngrx/store';

export const ADD_FAVOURITE = 'FAVOURITE_ADD';
export const REMOVE_FAVOURITE = 'FAVOURITE_REMOVE';

export class AddFavourite implements Action {
  readonly type = ADD_FAVOURITE;

  constructor(public payload: string) {

  }
}

export class RemoveFavourite implements Action {
  readonly type = REMOVE_FAVOURITE;

  constructor(public payload: string) {

  }
}

export type Actions = AddFavourite | RemoveFavourite;
