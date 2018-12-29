import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddResident, ClearResidents } from '../store/actions/resident.actions';
import { Resident } from '../models/resident.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private store: Store<AppState>) { }

  public getAll(): Observable<Resident[]> {
    return this.store.select(s => _.sortBy<Resident>(s.residents, r => r.name));
  }

  public filterByPlanet(planet: string): Observable<Resident[]> {
    return this.store.select(s => _.sortBy<Resident>(s.residents.filter(r => r.planet === planet), r => r.name));
  }

  public add(resident: Resident) {
    this.store.dispatch(new AddResident(resident));
  }

  public removeAll() {
    return this.store.dispatch(new ClearResidents());
  }
}
