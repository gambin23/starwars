import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';
import { Planet } from '../models/planet.model';

export interface AppState {
  readonly planets: { currentList: PlanetList, planets: Planet[] };
  readonly residents: Resident[];
  readonly favourites: string[];
}
