import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Planet } from 'src/models/Planet';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) { }

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
