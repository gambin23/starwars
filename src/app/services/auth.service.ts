import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
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

    return new Observable((observer: Observer<User>) => {
      setTimeout(() => {
        if (foundUser != null) {
          if (foundUser.password === user.password) {
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
}
