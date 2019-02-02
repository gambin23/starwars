import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from './theme.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers/app.reducers';
import { PlanetEffects } from './store/effects/planet.effects';
import { AccountEffects } from './store/effects/account.effects';
import { ResidentEffects } from './store/effects/resident.effects';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';
import { AddFavouriteComponent } from './components/add-favourite/add-favourite.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { ResidentsCardsComponent } from './components/planet-details/residents-cards/residents-cards.component';
import { ResidentsTableComponent } from './components/planet-details/residents-table/residents-table.component';

import { NotApplicablePipe } from './pipes/not-applicable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PlanetDetailsComponent,
    ResidentsTableComponent,
    ResidentsCardsComponent,
    AddFavouriteComponent,
    FavouritesComponent,
    PlanetListComponent,
    NotApplicablePipe
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlanetEffects, AccountEffects, ResidentEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
