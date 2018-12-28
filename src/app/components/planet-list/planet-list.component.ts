import { Component, OnInit, OnDestroy } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { PlanetList } from '../../models/planet-list.model';
import { PlanetService } from '../../services/planet.service';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy {

  planetList$: Observable<PlanetList>;
  valueChange: Subscription;
  search = new FormControl();
  error: string;
  loading = false;

  constructor(
    private planetService: PlanetService,
    private api: ApiService,
  ) { }


  ngOnInit() {
    this.valueChange = this.search.valueChanges.pipe(debounceTime(1500), startWith(''))
      .subscribe(value => {
        this.loadPlanets(this.api.getPlanets(value));
      });
  }

  ngOnDestroy() {
    this.valueChange.unsubscribe();
  }

  onNextPage() {
    this.planetList$.subscribe(p => {
      this.loadPlanets(this.api.getPlanetsNext(p.next));
    }).unsubscribe();

  }

  onPreviousPage() {
    this.planetList$.subscribe(p => {
      this.loadPlanets(this.api.getPlanetsPrevious(p.previous));
    }).unsubscribe();

  }

  loadPlanets(planets: Observable<PlanetList>) {
    this.loading = true;
    this.error = null;
    planets.subscribe(
      planetList => {
        this.loading = false;
        this.planetService.addList(planetList);
        planetList.results.map(planet => this.planetService.add(planet));
        this.planetList$ = this.planetService.getCurrentList();
      },
      error => {
        this.loading = false;
        this.error = 'Failed to obtain planets';
      });
  }
}
