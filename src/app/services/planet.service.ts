import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPlanetList, AddPlanet } from '../store/actions/planet.actions';
import { IAppState } from '../store/app.state';
import { Planet } from '../models/planet.model';
import { PlanetList } from '../models/planet-list.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private store: Store<IAppState>) { }

  public getAll(): Observable<Planet[]> {
    return this.store.select(s => _.sortBy<Planet>(s.planets.planets, p => p.name));
  }

  public getById(id: string): Observable<Planet> {
    return this.store.select(s => s.planets.planets.find(p => p.name === id));
  }

  public add(planet: Planet) {
    this.store.dispatch(new AddPlanet(planet));
  }

  public getCurrentList(): Observable<PlanetList> {
    return this.store.select(s => s.planets.currentList);
  }

  public addList(list: PlanetList) {
    this.store.dispatch(new AddPlanetList(list));
  }

}
