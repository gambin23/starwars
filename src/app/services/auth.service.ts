import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AddUser, DeleteUser } from '../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private store: Store<IAppState>) {
  }

  private users: User[] = [{ username: 'han', password: 'solo' }];

  public login(user: User): Observable<User> {
    const foundUser = this.users.find(u => u.username === user.username);

    return Observable.create((observer: Observer<User>) => {
      setTimeout(() => {
        if (foundUser != null) {
          if (foundUser.password === user.password) {
            this.store.dispatch(new AddUser(user));
            observer.next(foundUser);
          } else {
            observer.error('Invalid password.');
          }
        } else {
          observer.error('Invalid username.');
        }
      }, 2000);
    });
  }

  public logout() {
    this.store.dispatch(new DeleteUser());
  }

  public getUser(): Observable<User> {
    return this.store.select(s => s.user);
  }
}
