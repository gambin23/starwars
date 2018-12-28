import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AddUser, DeleteUser } from '../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private store: Store<AppState>) {
  }

  private users: User[] = [{ username: 'han', password: 'solo' }];

  public login(user: User): Observable<User> {
    const foundUser = this.users.find(u => u.username === user.username);

    if (foundUser != null) {
      if (foundUser.password === user.password) {
        this.store.dispatch(new AddUser(user));
        return of(foundUser).pipe(delay(1000));
      } else {
        return throwError('Invalid password.');
      }
    } else {
      return throwError('Invalid username.');
    }
  }

  public logout() {
    this.store.dispatch(new DeleteUser());
  }

  public getUser(): Observable<User> {
    return this.store.select(s => s.user);
  }
}
