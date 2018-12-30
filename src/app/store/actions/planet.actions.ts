import { Action } from '@ngrx/store';
import { PlanetList } from '../../models/planet-list.model';
import { Planet } from '../../models/planet.model';

export const LOAD_PLANETLIST = 'PLANETLIST_LOAD';
export const ADD_PLANETLIST = 'PLANETLIST_ADD';
export const ERROR_PLANETLIST = 'PLANETLIST_ERROR';

export const ADD_PLANET = 'PLANETS_ADD';


export class LoadPlanetList implements Action {
  readonly type = LOAD_PLANETLIST;
  constructor(public payload: { criteria: string, url: string }) {
  }
}

export class ErrorPlanetList implements Action {
  readonly type = ERROR_PLANETLIST;
  constructor(public payload: string) {
  }
}

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

export type Actions =
  LoadPlanetList
  | ErrorPlanetList
  | AddPlanetList
  | AddPlanet;
