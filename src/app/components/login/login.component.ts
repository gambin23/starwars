import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { LoginTry } from 'src/app/store/actions/account.actions';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean>;
  error$: Observable<string>;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  form = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    private store: Store<IAppState>,
  ) {
  }

  ngOnInit() {
  }

  onLogin() {
    const user = this.form.value as User;
    this.store.dispatch(new LoginTry(user));
    this.loading$ = this.store.select(s => s.account.loading);
    this.error$ = this.store.select(s => s.account.error);
  }

  ngOnDestroy() {
  }

}
