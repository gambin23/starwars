import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../app/store/app.state';
import { AddResidentsLoad, ClearResidents, ViewResidents } from '../../store/actions/resident.actions';
import { Planet } from '../../models/planet.model';
import { Resident } from '../../models/resident.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { IDictionary } from '../../../app/models/dictionary.interface';
import { map } from 'rxjs/operators';
import { transition, state, trigger, animate, style } from '@angular/animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})

export class PlanetDetailsComponent implements OnInit, OnDestroy {
  routeChange: Subscription;
  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  images$: Observable<IDictionary<string>>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  view$: Observable<string>;
  columns: string[] = ['name', 'gender', 'height', 'mass'];
  sort: sort = 'asc';
  showSearch = false;
  search = new FormControl();

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

      this.residents$ = this.store.select(s => _.orderBy(s.residents.residents, r => r.name, this.sort));
      this.images$ = this.store.select(s => s.residents.images);
      this.loading$ = this.store.select(s => s.residents.loading);
      this.error$ = this.store.select(s => s.residents.error);
      this.view$ = this.store.select(s => s.residents.view);
    });
  }

  ngOnDestroy() {
    this.routeChange.unsubscribe();
  }

  onChangeView(view: string) {
    this.store.dispatch(new ViewResidents(view));
  }

  onSort() {
    if (this.sort === 'asc') {
      this.sort = 'desc';
    } else {
      this.sort = 'asc';
    }
    this.residents$ = this.residents$.pipe(map(residents => _.orderBy(residents, r => r.name, this.sort)));
  }

  onShowSearch() {
    this.showSearch = !this.showSearch;
  }

  onHideSearch() {
    this.residents$ = this.store.select(s => _.orderBy(s.residents.residents, r => r.name, this.sort));
    this.search.setValue('');
    this.showSearch = false;
  }

  onSearch() {
    this.residents$ = this.residents$.pipe(map(residents => residents.filter(r => r.name.toLowerCase().includes(this.search.value))));
  }
}

type sort = 'asc' | 'desc';
