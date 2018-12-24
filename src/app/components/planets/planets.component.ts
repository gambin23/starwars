import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AddPlanet } from '../../store/actions/planet.actions';
import { AddResident, ClearResidents } from '../../store/actions/resident.actions';
import { Planet } from '../../models/planet.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router, private api: ApiService) { }

  planets: Planet[] = [{ name: 'Alderaan', residents: ['https://swapi.co/api/people/5/', 'https://swapi.co/api/people/68/', 'https://swapi.co/api/people/81/'] }, { name: 'Yavin IV', residents: [] }, { name: 'Dagobah', residents: [] }, { name: 'Bespin', residents: [] }, { name: 'Endor', residents: [] }, { name: 'Naboo', residents: [] }, { name: 'Coruscant', residents: [] }, { name: 'Kamino', residents: [] }, { name: 'Geonosis', residents: [] }];
  filteredPlanets$: Observable<Planet[]>;
  search = new FormControl();

  ngOnInit() {
    this.planets.forEach(p => this.store.dispatch(new AddPlanet(p)));
    this.filteredPlanets$ = this.search.valueChanges.pipe(
      debounceTime(1500),
      startWith<string>(''),
      map(value => this.filter(value)),
    );
  }

  loadPersons(planet: Planet) {
    this.router.navigate(['/planet', planet.name]);
    this.store.dispatch(new ClearResidents());
    planet.residents.forEach(url => {
      this.api.getPerson(url).subscribe(p => this.store.dispatch(new AddResident(p)));
    });
  }

  filter(value: string) {
    return this.planets.filter(planet => planet.name.toLowerCase().includes(value.toLowerCase())).sort();
  }
}
