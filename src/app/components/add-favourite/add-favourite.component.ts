import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { Planet } from '../../models/planet.model';
import { Observable } from 'rxjs';
import { AddFavourite, RemoveFavourite } from 'src/app/store/actions/favourite.actions';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.scss']
})

export class AddFavouriteComponent implements OnInit {

  @Input() planet: Planet;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  onAddFavourite() {
    this.store.dispatch(new AddFavourite(this.planet.name));
  }

  onRemoveFavourite() {
    this.store.dispatch(new RemoveFavourite(this.planet.name));
  }

  isFavourite(): Observable<Planet> {
    return this.store.select(s => s.planets.planets.find(p => s.favourites.includes(this.planet.name)));
  }
}
