import { AppState } from '../app.state';
import { PlanetList } from '../../models/planet-list.model';
import { Planet } from '../../models/planet.model';
import * as PlanetActions from '../actions/planet.actions';
import * as _ from 'lodash';

export function PlanetReducer(state = AppState.planets, action: PlanetActions.Actions) {

  switch (action.type) {
    case PlanetActions.LOAD_PLANETLIST:
      state.loading = true;
      return state;
    case PlanetActions.ADD_PLANETLIST:
      state.error = null;
      state.loading = false;
      state.currentList = action.payload;
      state.planets = addPlanets(state.planets, action.payload.results);
      return state;
    case PlanetActions.ERROR_PLANETLIST:
      state.error = action.payload;
      state.loading = false;
      return state;
    default:
      return state;
  }
}

function addPlanets(state: Planet[], planets: Planet[]): Planet[] {
  planets.map(p => {
    const index = state.findIndex(sp => sp.name.toLowerCase() === p.name.toLowerCase());
    if (index === -1) {
      state = [...state, p];
    } else {
      state.splice(index, 1, p);
    }
  });
  return state;
}
