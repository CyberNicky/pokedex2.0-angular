import { Component } from '@angular/core';
import { PokemonService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonsPagination!: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }


  getPokemons(): void {
    this.pokemonService
      .getPagination()
      .subscribe(({ results }: any) => {
        this.pokemonsPagination  = results;
      });
  }
}

