import {
  AbstractType,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PokemonData } from './../../models/pokemonData';
import { PokemonService } from './../../services/app.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pokemonsPagination!: any;
  pokemons: PokemonData[] = [];

  displayedColumns: string[] = ['name'];

  @Input() pagination!: any[];
  dataSource!: MatTableDataSource<any>;

  constructor(private service: PokemonService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pagination'].currentValue) {
      this.dataSource = new MatTableDataSource<any>(this.pagination);

      this.dataSource.paginator = this.paginator;
      console.log('mudou  aqui');
      this.getPokemons(changes['pagination'].currentValue);
    }
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this.service.getPokemon(pokemonName) as Observable<PokemonData>;
  }

  length: number = 0;
  pageSize: number = 3; //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  onPageChange(event: PageEvent) {
    console.log('os pokemons', this.pokemons);
    
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    console.log(startIndex, endIndex);
    
    this.pokemonsPagination = this.pokemons.slice(startIndex, endIndex);
  }

  getPokemons(data: []) {
    data.map((item: any) => {
      return this.getPokemon(item.name).subscribe({
        next: (res: any) => {
          const pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          };

          this.pokemons.push(pokemon);
          this.pokemonsPagination = this.pokemons.slice(0,4);
          this.length = this.pokemons.length;
        },
        error: (err) => console.log('not found'),
      });
    });
  }

  getPagedata(event?: PageEvent) {
    console.log(event);
  }
}
