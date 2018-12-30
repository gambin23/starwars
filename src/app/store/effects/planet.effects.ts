import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LOAD_PLANETLIST, PlanetListLoad, PlanetListSuccess, PlanetListError } from '../actions/planet.actions';
import { ApiService } from 'src/app/services/api.service';
import { PlanetList } from 'src/app/models/planet-list.model';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class PlanetEffects {

  constructor(private actions$: Actions, private apiService: ApiService) { }

  @Effect()
  loadPlanetList = this.actions$.pipe(
    ofType(LOAD_PLANETLIST),
    map((action: PlanetListLoad) => action.payload),
    switchMap((args: { criteria: string, url: string }) => this.apiService.getPlanets(args.criteria, args.url).pipe(
      map((planetList: PlanetList) => new PlanetListSuccess(planetList)),
      catchError(() => of(new PlanetListError('Failed to obtain planets.')))
    )),
  );

}
