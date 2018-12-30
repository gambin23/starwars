import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIcon('r2d2', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/r2d2.svg'));
    matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'));
    matIconRegistry.addSvgIcon('male', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/male.svg'));
    matIconRegistry.addSvgIcon('female', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/female.svg'));
  }
}
