import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { FavouriteService } from '../../services/favourite.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.scss']
})

export class AddFavouriteComponent implements OnInit {

  @Input() planet: Planet;

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  onAddFavourite() {
    this.favouriteService.add(this.planet);
  }

  onRemoveFavourite() {
    this.favouriteService.delete(this.planet);
  }

  isFavourite(): Observable<boolean> {
    return this.favouriteService.getAll().pipe(map(favs => _.has(favs, this.planet.name)));
  }
}
