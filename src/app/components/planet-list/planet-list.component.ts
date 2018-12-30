import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { PlanetList } from '../../models/planet-list.model';
import { PlanetListLoad } from '../../store/actions/planet.actions';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy {

  search = new FormControl();
  valueChange: Subscription;
  planetList$: Observable<PlanetList>;
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    this.valueChange = this.search.valueChanges.pipe(
      debounceTime(1500),
      startWith('')
    )
      .subscribe((value: string) => {
        this.store.dispatch(new PlanetListLoad({ criteria: value, url: null }));
        this.planetList$ = this.store.select(s => s.planets.currentList);
        this.loading$ = this.store.select(s => s.planets.loading);
        this.error$ = this.store.select(s => s.planets.error);
      });
  }

  ngOnDestroy() {
    this.valueChange.unsubscribe();
  }

  onNextPage() {
    this.planetList$.subscribe(p => this.store.dispatch(new PlanetListLoad({ criteria: null, url: p.next }))).unsubscribe();
  }

  onPreviousPage() {
    this.planetList$.subscribe(p => this.store.dispatch(new PlanetListLoad({ criteria: null, url: p.previous }))).unsubscribe();
  }
}
