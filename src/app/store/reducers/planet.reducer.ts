import { PlanetList } from '../../models/planet-list.model';
import * as PlanetActions from '../actions/planet.actions';

const initialState: PlanetList = null;

export function PlanetReducer(state: PlanetList = initialState, action: PlanetActions.Actions) {

  switch (action.type) {
    case PlanetActions.ADD_PLANETS:
      return action.payload;
    default:
      return state;
  }
}
