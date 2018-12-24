import { Action } from '@ngrx/store';
import { PlanetList } from '../../models/planet-list.model';

export const ADD_PLANETS = '[PLANETS] ADD';

export class AddPlanets implements Action {
  readonly type = ADD_PLANETS;

  constructor(public payload: PlanetList) {
  }
}

export type Actions = AddPlanets;
