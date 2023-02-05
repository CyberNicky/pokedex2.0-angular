import { Component } from '@angular/core';
import { PokemonService } from '././../../services/app.service';
import { LocalStorageService } from '../services/localStorage.service';
import { PokemonData } from 'src/app/models/pokemonData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoritesPokemons: PokemonData[] = [];
  constructor(
    private service: PokemonService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getAllFavoritesPokemons();
  }
  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this.service.getPokemon(pokemonName) as Observable<PokemonData>;
  }
  deleteFavoritePokemon(name: string) {
    let pokemonsFavorite: string[] | undefined | null =
      this.localStorageService.get('pokemons');
    console.log(pokemonsFavorite);
    pokemonsFavorite = pokemonsFavorite?.filter(
      (pokeName) => pokeName !== name
    );
    window.location.reload();
    return this.localStorageService.set('pokemons', pokemonsFavorite);
  }

  getAllFavoritesPokemons(): void {
    const localStorage = this.localStorageService.get('pokemons');
    console.log(localStorage);

    localStorage.map((item: any) => {
      return this.getPokemon(item).subscribe({
        next: (res: any) => {
          const pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          };

          this.favoritesPokemons.push(pokemon);
        },
        error: (err) => console.log('not found'),
      });
    });
  }
}
