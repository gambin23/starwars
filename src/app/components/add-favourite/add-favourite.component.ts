import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AddFavourite, DeleteFavourite } from '../../store/actions/favourite.actions';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.scss']
})

export class AddFavouriteComponent implements OnInit {

  @Input() planet: Planet;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onAddFavourite() {
    this.store.dispatch(new AddFavourite(this.planet.name));
  }

  onRemoveFavourite() {
    this.store.dispatch(new DeleteFavourite(this.planet.name));
  }

  isFavourite(): Observable<boolean> {
      return this.store.select(s => s.favourites).pipe(map(favs => _.has(favs, this.planet.name)));
  }
}
