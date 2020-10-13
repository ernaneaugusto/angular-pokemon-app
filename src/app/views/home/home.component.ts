import { PokemonsService } from './../../service/pokemons/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/config/urls/urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemonsList: any;

  constructor(private pokemons: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons() {
    this.pokemons
      .getPokemons()
      .subscribe((pokemons) => {

        this.pokemonsList = pokemons.results.map((item) => {
          let currentId = item.url.split('/')[6];
          return {
            name: item.name,
            url: item.url,
            imageUrl: `${API.imageUrl}${currentId}.png`,
          }
        });
      });
  }

  // private filterByType(data): any {
  //   const types = data.map(item => item.type[0]);

  //   const uniqueTypes = types.filter((value, index, self) => {
  //     return self.indexOf(value) === index;
  //   })
  //   return uniqueTypes;
  // }

}
