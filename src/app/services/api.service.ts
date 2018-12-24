import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';

const baseUrl = 'https://swapi.co/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private client: HttpClient) {
  }

  public getPlanets(criteria: string) {
    return this.client.get<PlanetList>(`${baseUrl}planets/?search=${criteria}`);
  }

  public getPlanetsNext(url: string) {
    return this.client.get<PlanetList>(url);
  }
  public getPlanetsPrevious(url: string) {
    return this.client.get<PlanetList>(url);
  }

  public getPerson(url: string) {
    return this.client.get<Resident>(url);
  }
}
