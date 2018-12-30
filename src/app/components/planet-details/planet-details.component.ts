import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { AddResidentsLoad, ClearResidents } from 'src/app/store/actions/resident.actions';
import { Planet } from '../../models/planet.model';
import { Resident } from '../../models/resident.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})

export class PlanetDetailsComponent implements OnInit, OnDestroy {
  routeChange: Subscription;
  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.routeChange = this.route.params.subscribe(param => {

      this.planet$ = this.store.select(s => s.planets.planets.find(p => p.name === param.id));

      this.planet$.subscribe(planet => {
        if (planet != null) {
          this.store.dispatch(new ClearResidents());
          if (planet.residents.length > 0) {
            this.store.dispatch(new AddResidentsLoad(planet));
          }
        }
      }).unsubscribe();

      this.residents$ = this.store.select(s => _.sortBy(s.residents.residents, r => r.name, ['asc']));
      this.loading$ = this.store.select(s => s.residents.loading);
      this.error$ = this.store.select(s => s.residents.error);
    });
  }

  ngOnDestroy() {
    this.routeChange.unsubscribe();
  }

}

