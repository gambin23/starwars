import { Component, OnInit } from '@angular/core';
import Planet from './../../models/Planet';
import Person from './../../models/Person';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})

export class PlanetDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    console.log(this.route.params.subscribe(param => console.log(param.id)));

    matIconRegistry.addSvgIcon('male', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/male.svg'));
    matIconRegistry.addSvgIcon('female', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/female.svg'));
  }

  planet: Planet = { name: 'Test' };
  people: Person[] = [
    {
      name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair',
      eye_color: 'blue', birth_year: '19BBY', gender: 'male'
    },
    {
      name: 'Maria Agostini', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair',
      eye_color: 'blue', birth_year: '19BBY', gender: 'female'
    },
    {
      name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair',
      eye_color: 'blue', birth_year: '19BBY', gender: 'male'
    },
    {
      name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair',
      eye_color: 'blue', birth_year: '19BBY', gender: 'male'
    },
    {
      name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair',
      eye_color: 'blue', birth_year: '19BBY', gender: 'male'
    }
  ];

  dataSource: Person[] = this.people;
  columns: string[] = ['name', 'gender', 'height', 'mass'];

  ngOnInit() {
  }

}

