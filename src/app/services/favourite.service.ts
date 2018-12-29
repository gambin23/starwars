import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';
import { AddFavourite, DeleteFavourite } from '../store/actions/favourite.actions';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private store: Store<AppState>) { }

  public getAll(): Observable<Planet[]> {
    return this.store.select(s => _.sortBy<Planet>(s.planets.planets.filter(p => s.favourites.includes(p.name)), p => p.name));
  }

  public getById(id: string): Observable<Planet> {
    return this.store.select(s => s.planets.planets.find(p => s.favourites.includes(id)));
  }

  public add(planet: Planet) {
    this.store.dispatch(new AddFavourite(planet.name));
  }

  public delete(planet: Planet) {
    this.store.dispatch(new DeleteFavourite(planet.name));
  }

}
