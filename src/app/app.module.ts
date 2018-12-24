import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlanetReducer } from '../app/store/reducers/planet.reducer';
import { ResidentReducer } from './store/reducers/resident.reducer';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';

import { ApiService } from '../app/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlanetDetailsComponent,
    PlanetsComponent,
    HomeComponent
  ],
  imports: [
    StoreModule.forRoot({ planets: PlanetReducer, residents: ResidentReducer }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
