import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';
import { Planet } from '../models/planet.model';
import { User } from '../models/user.model';

export interface IAppState {
  planets: {
    currentList: PlanetList,
    planets: Planet[],
    loading: boolean,
    error: string
  };
  residents: Resident[];
  favourites: string[];
  account: {
    user: User,
    authenticated: boolean
  };
}

export const AppState: IAppState = {
  planets: {
    currentList: null,
    planets: [],
    loading: false,
    error: null
  },
  residents: [],
  favourites: [],
  account: {
    user: null,
    authenticated: false
  }
};

