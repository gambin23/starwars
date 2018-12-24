import { Action } from '@ngrx/store';
import { Resident } from '../../models/resident.model';

export const ADD_RESIDENT = '[RESIDENTS] ADD';
export const CLEAR_RESIDENTS = '[RESIDENTS] CLEAR';

export class AddResident implements Action {
  readonly type = ADD_RESIDENT;

  constructor(public payload: Resident) {

  }
}

export class ClearResidents implements Action {
  readonly type = CLEAR_RESIDENTS;

  constructor() {

  }
}

export type Actions = AddResident | ClearResidents;
