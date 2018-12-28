import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlanetReducer } from '../app/store/reducers/planet.reducer';
import { ResidentReducer } from './store/reducers/resident.reducer';
import { FavouriteReducer } from './store/reducers/favourite.reducer';
import { UserReducer } from './store/reducers/user.reducer';

import { AuthService } from '../app/services/auth.service';
import { AuthGuard } from '../app/services/auth-guard.service';
import { ApiService } from '../app/services/api.service';
import { PlanetService } from './services/planet.service';
import { ResidentService } from './services/resident.service';
import { FavouriteService } from './services/favourite.service';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { LoginComponent } from './components/login/login.component';
import { AddFavouriteComponent } from './components/add-favourite/add-favourite.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';

import { NotApplicablePipe } from './pipes/not-applicable.pipe';

import {
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PlanetDetailsComponent,
    PlanetsComponent,
    AddFavouriteComponent,
    FavouritesComponent,
    PlanetListComponent,
    NotApplicablePipe
  ],
  imports: [
    StoreModule.forRoot({
      planets: PlanetReducer,
      residents: ResidentReducer,
      favourites: FavouriteReducer,
      user: UserReducer
    }),
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
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ApiService,
    PlanetService,
    ResidentService,
    FavouriteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
