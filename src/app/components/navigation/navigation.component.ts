import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { LogoutTry } from 'src/app/store/actions/account.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  screenWidth: number;

  constructor(private store: Store<IAppState>) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  logout() {
    this.store.dispatch(new LogoutTry());
  }
}
