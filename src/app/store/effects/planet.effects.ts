import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LOAD_PLANETLIST, LoadPlanetList, AddPlanetList, ErrorPlanetList } from '../actions/planet.actions';
import { ApiService } from 'src/app/services/api.service';
import { PlanetList } from 'src/app/models/planet-list.model';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PlanetEffects {

  @Effect()
  loadPlanetList = this.actions$.pipe(
    ofType(LOAD_PLANETLIST),
    map((action: LoadPlanetList) => action.payload),
    switchMap((args: {criteria: string, url: string}) => this.apiService.getPlanets(args.criteria, args.url).pipe(
      map((planetList: PlanetList) => new AddPlanetList(planetList)),
      catchError(() => of(new ErrorPlanetList('Failed to obtain planets.')))
    )),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
