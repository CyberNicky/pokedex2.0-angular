import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';
  private pokeData: PokemonData | any;
  private limit: number = 100;
  private offset: number = 0;
  favoritePokemons: any;
  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }
  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(
      `${this.baseURL}${pokemonName}`
    ) as Observable<PokemonData>;
  }

  getPagination() {
    this.pokeData = this.http.get<PokemonData>(
      `${this.baseURL}?limit=${this.limit}&offset=${this.offset}`
    );
    return this.pokeData;
  }
}
