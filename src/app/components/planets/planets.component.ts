import { Component, OnInit } from '@angular/core';
import Planet from './../../models/Planet';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor() { }

  planets: Planet[] = [{ name: 'Alderaan' }, { name: 'Yavin IV' }, { name: 'Dagobah' }, { name: 'Bespin' }, { name: 'Endor' },
  { name: 'Naboo' }, { name: 'Coruscant' }, { name: 'Kamino' }, { name: 'Geonosis' }];
  filteredPlanets: Observable<Planet[]>;
  search = new FormControl();

  ngOnInit() {
    this.filteredPlanets = this.search.valueChanges.pipe(
      debounceTime(1500),
      startWith<string>(''),
      map(value => this.filter(value)),
    );
  }

  private filter(value: string): Planet[] {
    return this.planets.filter(planet => planet.name.toLowerCase().includes(value.toLowerCase())).sort();
  }

}
