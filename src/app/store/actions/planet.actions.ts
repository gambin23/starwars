import { Action } from '@ngrx/store';
import { Planet } from '../../models/planet.model';

export const ADD_PLANET = '[PLANET] ADD';

export class AddPlanet implements Action {
  readonly type = ADD_PLANET;

  constructor(public payload: Planet) {

  }
}

export type Actions = AddPlanet;
