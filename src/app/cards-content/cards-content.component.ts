import { Component } from '@angular/core';
import { PokemonService } from './../services/app.service';

@Component({
  selector: 'app-cards-content',
  templateUrl: './cards-content.component.html',
  styleUrls: ['./cards-content.component.scss'],
})
export class CardsContentComponent {
  pokemonsPagination!: any;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPagination().subscribe(({ results }: any) => {
      this.pokemonsPagination = results;
    });
  }
}
