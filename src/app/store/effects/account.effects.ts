import { User } from 'src/app/models/user.model';
import {
  LOGIN_TRY,
  LoginTry,
  LoginSuccess,
  LoginFail,
  LOGOUT_TRY,
  LogoutTry,
  LogoutSuccess
} from '../actions/account.actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AccountEffects {

  @Effect()
  login = this.actions$.pipe(
    ofType(LOGIN_TRY),
    map((action: LoginTry) => action.payload),
    switchMap((credentials: User) => this.authService.login(credentials).pipe(
      map((user: User) => {
        this.router.navigate(['planets']);
        return new LoginSuccess(user);
      }),
      catchError((error: string) => of(new LoginFail(error)))
    )),
  );

  @Effect()
  logout = this.actions$.pipe(
    ofType(LOGOUT_TRY),
    map((action: LogoutTry) => {
      this.router.navigate(['login']);
      return new LogoutSuccess();
    })
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
