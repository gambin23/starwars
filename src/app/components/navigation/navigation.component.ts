import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { LogoutTry } from 'src/app/store/actions/account.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  constructor(private store: Store<IAppState>) { }

  logout() {
    this.store.dispatch(new LogoutTry());
  }
}
