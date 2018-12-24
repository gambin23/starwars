import { Resident } from '../models/resident.model';
import { Planet } from '../models/planet.model';

export interface AppState {
  readonly planets: Planet[];
  readonly residents: Resident[];
}
