import { Action } from '@ngrx/store';
import { PlanetList } from '../../models/planet-list.model';
import { Planet } from '../../models/planet.model';

export const ADD_PLANETLIST = '[PLANETLIST] ADD';
export const ADD_PLANET = '[PLANETS] ADD';

export class AddPlanetList implements Action {
  readonly type = ADD_PLANETLIST;

  constructor(public payload: PlanetList) {
  }
}


export class AddPlanet implements Action {
  readonly type = ADD_PLANET;
  constructor(public payload: Planet) {
  }
}

export type Actions = AddPlanetList | AddPlanet;
