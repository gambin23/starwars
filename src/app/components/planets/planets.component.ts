import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AddPlanetList, AddPlanet } from '../../store/actions/planet.actions';
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
          planetList => {
            this.loading = false;
            this.error = null;
            this.store.dispatch(new AddPlanetList(planetList));
            planetList.results.map(planet => this.store.dispatch(new AddPlanet(planet)));
            this.planetList$ = this.store.select(s => s.planets.currentList);
            this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.currentList.results);
          },
          error => {
            this.loading = false;
            this.error = 'Failed to obtain planets';
          }
        );
      });
  }

  onNextPage() {
    this.loading = true;
    this.planetList$.subscribe(p => {
      this.api.getPlanetsNext(p.next).subscribe(
        planetList => {
          this.loading = false;
          this.error = null;
          this.store.dispatch(new AddPlanetList(planetList));
          planetList.results.map(planet => this.store.dispatch(new AddPlanet(planet)));
          this.planetList$ = this.store.select(s => s.planets.currentList);
          this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.currentList.results);
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
        planetList => {
          this.loading = false;
          this.error = null;
          this.store.dispatch(new AddPlanetList(planetList));
          planetList.results.map(planet => this.store.dispatch(new AddPlanet(planet)));
          this.planetList$ = this.store.select(s => s.planets.currentList);
          this.filteredPlanets$ = this.store.select(s => s.planets && s.planets.currentList.results);
        },
        error => {
          this.loading = false;
          this.error = 'Failed to obtain previous planets';
        }
      );
    }).unsubscribe();
  }
}
