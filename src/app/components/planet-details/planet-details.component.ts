import { Component, OnInit, OnDestroy } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { Resident } from '../../models/resident.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { MatIconRegistry, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddResident, ClearResidents } from '../../store/actions/resident.actions';
import { AddFavourite, DeleteFavourite } from '../../store/actions/favourite.actions';
import { ApiService } from '../../services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})

export class PlanetDetailsComponent implements OnInit, OnDestroy {
  routeChange: Subscription;
  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  favourites$: Observable<string[]>;
  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor(private store: Store<AppState>, private api: ApiService, private route: ActivatedRoute, private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('male', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/male.svg'));
    matIconRegistry.addSvgIcon('female', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/female.svg'));
  }

  ngOnInit() {
    this.routeChange = this.route.params.subscribe(param => {
      this.store.dispatch(new ClearResidents());
      this.planet$ = this.store.select(state => state.planets.planets && state.planets.planets.find(p => p.name === param.id));

      this.planet$.subscribe(planet => {
        if (planet != null) {
          planet.residents.map(url => {
            this.api.getPerson(url).subscribe(p => this.store.dispatch(new AddResident(p)));
          });
        }
      });

      this.residents$ = this.store.select(state => state.residents && state.residents);
    });
    this.favourites$ = from(this.store.select(state => state.favourites));
  }

  ngOnDestroy() {
    this.routeChange.unsubscribe();
  }

}

