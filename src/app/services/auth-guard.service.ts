import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let authenticated = false;
    this.authService.getUser().subscribe(user => {
      if (user != null) {
        authenticated = true;
      } else {
        this.router.navigate(['login']);
      }
    }).unsubscribe();
    return authenticated;
  }



}
