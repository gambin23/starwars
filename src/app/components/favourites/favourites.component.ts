import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites$: Observable<Planet[]>;
  display = true;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.favourites$ = this.store.select(s => s.planets.planets.filter(p => s.favourites.includes(p.name)));
  }

  toggle() {
    this.display = !this.display;
  }
}
