import { PlanetList } from '../../models/planet-list.model';
import { Planet } from '../../models/planet.model';
import * as PlanetActions from '../actions/planet.actions';
import * as _ from 'lodash';
const initialState: PlanetState = {
  currentList: null,
  planets: []
};


export function PlanetReducer(state: PlanetState = initialState, action: PlanetActions.Actions) {

  switch (action.type) {
    case PlanetActions.ADD_PLANETLIST:
      state.currentList = action.payload;
      return state;
    case PlanetActions.ADD_PLANET:
      const index = state.planets.findIndex(p => p.name.toLowerCase() === action.payload.name.toLowerCase());
      if (index === -1) {
        state.planets = [...state.planets, action.payload];
      } else {
        state.planets.splice(index, 1, action.payload);
      }
      return state;
    default:
      return state;
  }
}

class PlanetState {
  currentList: PlanetList;
  planets: Planet[];
}
