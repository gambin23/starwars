import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AddPlanets } from '../../store/actions/planet.actions';
import { AddResident, ClearResidents } from '../../store/actions/resident.actions';
import { Planet } from '../../models/planet.model';
import { PlanetList } from '../../models/planet-list.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router, private api: ApiService) { }

  planetList$: Observable<PlanetList>;
  filteredPlanets$: Observable<Planet[]>;
  search = new FormControl();
  error: string;
  loading = false;

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1500), startWith<string>(''))
      .subscribe(value => {
        this.loading = true;
        this.api.getPlanets(value).subscribe(
          planets => {
            this.loading = false;
            this.error = null;
            this.store.dispatch(new AddPlanets(planets));
            this.planetList$ = this.store.select(s => s.planets);
            this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.results);
          },
          error => {
            this.loading = false;
            this.error = 'Failed to obtain planets';
          }
        );
      }).unsubscribe();
  }

  onLoadPersons(planet: Planet) {
    this.router.navigate(['/planet', planet.name]);
    this.store.dispatch(new ClearResidents());
    planet.residents.map(url => {
      this.api.getPerson(url).subscribe(p => this.store.dispatch(new AddResident(p)));
    });
  }

  onNextPage() {
    this.loading = true;
    this.planetList$.subscribe(p => {
      this.api.getPlanetsNext(p.next).subscribe(
        planets => {
          this.loading = false;
          this.error = null;
          this.store.dispatch(new AddPlanets(planets));
          this.planetList$ = this.store.select(s => s.planets);
          this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.results);
        },
        error => {
          this.loading = false;
          this.error = 'Failed to obtain next planets';
        }
      );
    }).unsubscribe();
  }

  onPreviousPage() {
    this.loading = true;
    this.planetList$.subscribe(p => {
      this.api.getPlanetsNext(p.previous).subscribe(
        planets => {
          this.loading = false;
          this.error = null;
          this.store.dispatch(new AddPlanets(planets));
          this.planetList$ = this.store.select(s => s.planets);
          this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.results);
        },
        error => {
          this.loading = false;
          this.error = 'Failed to obtain previous planets';
        }
      );
    }).unsubscribe();
  }
}
