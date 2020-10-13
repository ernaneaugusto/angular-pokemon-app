import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../config/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.http.get(`${API.baseUrl}/${API.pokemon}`);
  }
}
