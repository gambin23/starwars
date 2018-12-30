import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { Planet } from '../../models/planet.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites$: Observable<Planet[]>;
  display = true;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.favourites$ = this.store.select(s => _.sortBy<Planet>(s.planets.planets.filter(p => s.favourites.includes(p.name)), p => p.name));
  }

  toggle() {
    this.display = !this.display;
  }
}
