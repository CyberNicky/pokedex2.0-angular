import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokedex';

  pokemonsPagination!: any;

  constructor(private pokemonService: PokemonService, public router: Router) {}

  ngOnInit() {
    this.getPokemons();
  }

 
  getPokemons(): void {
    this.pokemonService.getPagination().subscribe(({ results }: any) => {
      this.pokemonsPagination = results;
    });
  }
}
