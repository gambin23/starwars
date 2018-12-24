import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { Resident } from '../../models/resident.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { MatIconRegistry, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})

export class PlanetDetailsComponent implements OnInit {

  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    this.route.params.subscribe(param => {
      this.planet$ = this.store.select(state => state.planets.find(p => p.name === param.id));
      this.residents$ = this.store.select(state => state.residents);
    });

    matIconRegistry.addSvgIcon('male', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/male.svg'));
    matIconRegistry.addSvgIcon('female', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/female.svg'));
  }

  ngOnInit() {
  }

}

