import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';
import { Planet } from '../models/planet.model';
import { User } from '../models/user.model';

export interface IAppState {
  readonly planets: { currentList: PlanetList, planets: Planet[] };
  readonly residents: Resident[];
  readonly favourites: string[];
  readonly user: User;
}

export const AppState: IAppState = {
  planets: {
    currentList: null as PlanetList,
    planets: [] as Planet[]
  },
  residents: [] as Resident[],
  favourites: [] as string[],
  user: null as User
};

