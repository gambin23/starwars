import { AppState } from '../app.state';
import * as UserActions from '../actions/user.actions';
import { User } from '../../models/user.model';
import * as _ from 'lodash';

export function UserReducer(state = AppState.account, action: UserActions.Actions) {

  switch (action.type) {
    case UserActions.USER_LOGIN:
      return { ...state, user: action.payload, authenticated: true };
    case UserActions.USER_LOGOUT:
      return { ...state, user: null, authenticated: false };
    default:
      return state;
  }
}
