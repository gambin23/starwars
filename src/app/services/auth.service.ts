import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {
  }

  private users: User[] = [{ username: 'han', password: 'solo' }];

  public authenticate(user: User): Observable<User> {
    const foundUser = this.users.find(u => u.username === user.username);

    if (foundUser != null) {
      if (foundUser.password === user.password) {
        return of(foundUser).pipe(delay(2000));
      } else {
        return throwError('Invalid password.');
      }
    } else {
      return throwError('Invalid username.');
    }
  }

}
