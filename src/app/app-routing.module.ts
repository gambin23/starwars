import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'planets', component: PlanetsComponent, children: [
      { path: ':id', component: PlanetDetailsComponent, }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
