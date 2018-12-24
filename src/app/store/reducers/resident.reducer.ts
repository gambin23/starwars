import { Resident } from '../../models/resident.model';
import * as ResidentActions from '../actions/resident.actions';

const initialState: Resident[] = [];

export function ResidentReducer(state: Resident[] = initialState, action: ResidentActions.Actions) {

  switch (action.type) {
    case ResidentActions.ADD_RESIDENT:
      return [...state, action.payload];
    case ResidentActions.CLEAR_RESIDENTS:
      return [];
    default:
      return state;
  }
}
