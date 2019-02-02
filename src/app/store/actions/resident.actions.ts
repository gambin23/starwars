import { Action } from '@ngrx/store';
import { Resident } from '../../models/resident.model';
import { Planet } from 'src/app/models/planet.model';

export const ADD_RESIDENT = 'ADD_RESIDENT';
export const ADD_RESIDENTS_LOAD = 'ADD_RESIDENTS_LOAD';
export const ADD_RESIDENTS_SUCCESS = 'ADD_RESIDENTS_SUCCESS';
export const ADD_RESIDENTS_ERROR = 'ADD_RESIDENTS_ERROR';
export const CLEAR_RESIDENTS = 'CLEAR_RESIDENTS';
export const VIEW_RESIDENTS = 'VIEW_RESIDENTS';

export class AddResident implements Action {
  readonly type = ADD_RESIDENT;
  constructor(public payload: Resident) { }
}

export class AddResidentsLoad implements Action {
  readonly type = ADD_RESIDENTS_LOAD;
  constructor(public payload: Planet) { }
}

export class AddResidentsSuccess implements Action {
  readonly type = ADD_RESIDENTS_SUCCESS;
  constructor(public payload: Resident[]) { }
}

export class AddResidentsError implements Action {
  readonly type = ADD_RESIDENTS_ERROR;
  constructor(public payload: string) { }
}

export class ClearResidents implements Action {
  readonly type = CLEAR_RESIDENTS;
}

export class ViewResidents implements Action {
  readonly type = VIEW_RESIDENTS;
  constructor(public payload: string) { }
}

export type Actions =
  AddResident
  | AddResidentsLoad
  | AddResidentsSuccess
  | AddResidentsError
  | ClearResidents
  | ViewResidents;
