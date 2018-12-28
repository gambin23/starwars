import { Component, OnInit, OnDestroy } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { Resident } from '../../models/resident.model';
import { PlanetService } from '../../services/planet.service';
import { ResidentService } from '../../services/resident.service';
import { MatIconRegistry, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})

export class PlanetDetailsComponent implements OnInit, OnDestroy {
  routeChange: Subscription;
  planetChange: Subscription;
  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor(
    private api: ApiService,
    private planetService: PlanetService,
    private residentService: ResidentService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIcon('male', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/male.svg'));
    matIconRegistry.addSvgIcon('female', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/female.svg'));
  }

  ngOnInit() {
    this.routeChange = this.route.params.subscribe(param => {
      this.planet$ = this.planetService.getById(param.id);

      this.planetChange = this.planet$.subscribe(planet => {
        if (planet != null) {
          this.residentService.removeAll();
          planet.residents.map(url => {
            this.api.getResident(url).subscribe(r => {
              r.planet = param.id;
              this.residentService.add(r);
            });
          });
        }
      });

      this.residents$ = this.residentService.filterByPlanet(param.id);
    });
  }

  ngOnDestroy() {
    this.routeChange.unsubscribe();
    this.planetChange.unsubscribe();
  }

}

