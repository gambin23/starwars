import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIcon('r2d2', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/r2d2.svg'));
    matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'));

  }

  ngOnInit() {
  }
}
