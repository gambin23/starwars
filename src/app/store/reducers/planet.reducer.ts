import { Planet } from '../../models/planet.model';
import * as PlanetActions from '../actions/planet.actions';

const initialState: Planet[] = [];

export function PlanetReducer(state: Planet[] = initialState, action: PlanetActions.Actions) {

  switch (action.type) {
    case PlanetActions.ADD_PLANET:
      return [...state, action.payload];
    default:
      return state;
  }
}
