import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading = false;
  error = '';
  authenticateSubscription: Subscription;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  form = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  onLogin() {
    const user = this.form.value as User;
    this.loading = true;
    this.authenticate(user);
  }

  authenticate(user: User) {
    this.authenticateSubscription = this.authService.login(user).subscribe(
      foundUser => { this.router.navigate(['planets']); },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    this.authenticateSubscription.unsubscribe();
  }

}
