import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'planets', canActivate: [AuthGuard], component: PlanetsComponent, children: [
      { path: ':id', component: PlanetDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
