import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { FavouriteService } from '../../services/favourite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites$: Observable<Planet[]>;
  display = true;

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.favourites$ = this.favouriteService.getAll();
  }

  toggle() {
    this.display = !this.display;
  }
}
