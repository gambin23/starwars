import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private client: HttpClient) {
  }

  public getPlanets(criteria: string, url: string = null) {
    if (url == null) {
      return this.client.get<PlanetList>(`${baseUrl}planets/?search=${criteria}`);
    } else {
      return this.client.get<PlanetList>(url);
    }
  }

  public getResident(url: string) {
    return this.client.get<Resident>(url);
  }
}
