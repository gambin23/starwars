import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hcCredentials: User = { username: 'han', password: 'solo' };
  loading = false;
  error = '';
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  form = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIcon('r2d2', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/r2d2.svg'));
  }

  ngOnInit() {
  }

  onLogin() {
    const user = this.form.value as User;
    this.loading = true;
    this.authenticate(user);
  }

  authenticate(user: User) {
    this.authService.login(user).subscribe(
      foundUser => { this.router.navigate(['planets']); },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

}
