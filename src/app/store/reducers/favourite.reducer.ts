import * as FavouriteActions from '../actions/favourite.actions';
import * as _ from 'lodash';

const initialState: string[] = [];

export function FavouriteReducer(state: string[] = initialState, action: FavouriteActions.Actions) {

  switch (action.type) {
    case FavouriteActions.ADD_FAVOURITE:
      return [...state, action.payload];
    case FavouriteActions.DELETE_FAVOURITE:
      const index = state.indexOf(action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}
