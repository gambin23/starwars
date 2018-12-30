import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private store: Store<IAppState>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(s => s.account.authenticated).pipe(
      map((authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );

  }



}
