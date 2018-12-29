import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from './theme.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers/app.reducers';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { PlanetService } from './services/planet.service';
import { ResidentService } from './services/resident.service';
import { FavouriteService } from './services/favourite.service';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';
import { AddFavouriteComponent } from './components/add-favourite/add-favourite.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';

import { NotApplicablePipe } from './pipes/not-applicable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PlanetDetailsComponent,
    AddFavouriteComponent,
    FavouritesComponent,
    PlanetListComponent,
    NotApplicablePipe
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    ThemeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    ApiService,
    PlanetService,
    ResidentService,
    FavouriteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
