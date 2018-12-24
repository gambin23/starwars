import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';

export interface AppState {
  readonly planets: PlanetList;
  readonly residents: Resident[];
}
