import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../app.state';
import { PlanetReducer } from './planet.reducer';
import { ResidentReducer } from './resident.reducer';
import { FavouriteReducer } from './favourite.reducer';
import { UserReducer } from './user.reducer';

export const reducers: ActionReducerMap<IAppState> = {
  planets: PlanetReducer,
  residents: ResidentReducer,
  favourites: FavouriteReducer,
  user: UserReducer
};
