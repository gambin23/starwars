import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ADD_RESIDENTS_LOAD, AddResidentsLoad, AddResidentsSuccess, AddResidentsError } from '../actions/resident.actions';
import { ApiService } from 'src/app/services/api.service';
import { of, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Resident } from 'src/app/models/resident.model';

@Injectable()
export class ResidentEffects {

  constructor(private actions$: Actions, private apiService: ApiService) { }

  @Effect()
  loadResidents = this.actions$.pipe(
    ofType(ADD_RESIDENTS_LOAD),
    map((action: AddResidentsLoad) => action.payload.residents),
    switchMap((residentUrls: string[]) => forkJoin(residentUrls.map(r => this.apiService.getResident(r))).pipe(
      map((residents: Resident[]) => new AddResidentsSuccess(residents)),
      catchError(() => of(new AddResidentsError('Failed to obtain all residents.')))
    ))
  );

}
