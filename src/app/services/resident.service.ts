import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Resident } from '../models/resident.model';
import { Observable } from 'rxjs';
import { AddResident, ClearResidents } from '../store/actions/resident.actions';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private store: Store<AppState>) { }

  public getAll(): Observable<Resident[]> {
    return this.store.select(s => s.residents);
  }

  public filterByPlanet(planet: string): Observable<Resident[]> {
    return this.store.select(s => s.residents.filter(r => r.planet === planet));
  }

  public add(resident: Resident) {
    this.store.dispatch(new AddResident(resident));
  }

  public removeAll() {
    return this.store.dispatch(new ClearResidents());
  }
}
