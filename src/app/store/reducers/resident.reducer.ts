import { AppState } from '../app.state';
import { Resident } from '../../models/resident.model';
import * as ResidentActions from '../actions/resident.actions';

export function ResidentReducer(state = AppState.residents, action: ResidentActions.Actions) {

  switch (action.type) {
    case ResidentActions.ADD_RESIDENT:
      state.residents = [...state.residents, action.payload];
      return state;
    case ResidentActions.ADD_RESIDENTS_LOAD:
      state.loading = true;
      return state;
    case ResidentActions.ADD_RESIDENTS_SUCCESS:
      state.residents = action.payload;
      state.loading = false;
      return state;
    case ResidentActions.ADD_RESIDENTS_ERROR:
      state.error = action.payload;
      state.loading = false;
      return state;
    case ResidentActions.CLEAR_RESIDENTS:
      state.residents = [];
      return state;
    default:
      return state;
  }
}
