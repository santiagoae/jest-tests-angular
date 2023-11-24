import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id:number):Observable<IPokemon>{
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
