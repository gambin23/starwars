import * as FavouriteActions from '../actions/favourite.actions';
import * as _ from 'lodash';

const initialState: string[] = [];

export function FavouriteReducer(state: string[] = initialState, action: FavouriteActions.Actions) {

  switch (action.type) {
    case FavouriteActions.ADD_FAVOURITE:
      return [...state, action.payload];
    case FavouriteActions.DELETE_FAVOURITE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
