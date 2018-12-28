import * as UserActions from '../actions/user.actions';
import {User} from '../../models/user.model';
import * as _ from 'lodash';

const initialState: User = null;

export function UserReducer(state: User = initialState, action: UserActions.Actions) {

  switch (action.type) {
    case UserActions.ADD_USER:
      return action.payload;
    case UserActions.DELETE_USER:
      return null;
    default:
      return state;
  }
}
