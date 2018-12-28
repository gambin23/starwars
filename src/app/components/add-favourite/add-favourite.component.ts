import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { FavouriteService } from '../../services/favourite.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.scss']
})

export class AddFavouriteComponent implements OnInit {

  @Input() planet: Planet;

  constructor(private favouriteService: FavouriteService) {
  }

  ngOnInit() {
  }

  onAddFavourite() {
    this.favouriteService.add(this.planet);
  }

  onRemoveFavourite() {
    this.favouriteService.delete(this.planet);
  }

  isFavourite(): Observable<Planet> {
    return this.favouriteService.getById(this.planet.name);
  }
}
