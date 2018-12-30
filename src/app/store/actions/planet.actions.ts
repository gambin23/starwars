import { Action } from '@ngrx/store';
import { PlanetList } from '../../models/planet-list.model';
import { Planet } from '../../models/planet.model';

export const LOAD_PLANETLIST = 'PLANETLIST_LOAD';
export const ADD_PLANETLIST = 'PLANETLIST_ADD';
export const ERROR_PLANETLIST = 'PLANETLIST_ERROR';

export const ADD_PLANET = 'PLANETS_ADD';


export class PlanetListLoad implements Action {
  readonly type = LOAD_PLANETLIST;
  constructor(public payload: { criteria: string, url: string }) { }
}

export class PlanetListSuccess implements Action {
  readonly type = ADD_PLANETLIST;

  constructor(public payload: PlanetList) { }
}
export class PlanetListError implements Action {
  readonly type = ERROR_PLANETLIST;
  constructor(public payload: string) { }
}

export type Actions =
  PlanetListLoad
  | PlanetListError
  | PlanetListSuccess;
