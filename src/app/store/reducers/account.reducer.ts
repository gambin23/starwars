import { AppState } from '../app.state';
import * as UserActions from '../actions/account.actions';

export function AccountReducer(state = AppState.account, action: UserActions.Actions) {

  switch (action.type) {
    case UserActions.LOGIN_TRY:
      state.loading = true;
      return state;
    case UserActions.LOGIN_SUCCESS:
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
      return state;
    case UserActions.LOGIN_FAIL:
      state.error = action.payload;
      state.loading = false;
      return state;
    case UserActions.LOGOUT_TRY:
      state.loading = true;
      return state;
    case UserActions.LOGOUT_SUCCESS:
      state.user = null;
      state.authenticated = false;
      state.loading = false;
      return state;
    default:
      return state;
  }
}
