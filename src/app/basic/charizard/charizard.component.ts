import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { IPokemon } from '../interfaces';

@Component({
  selector: 'app-charizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charizard.component.html',
  styleUrl: './charizard.component.css'
})
export class CharizardComponent implements OnInit{

  public charizard?:IPokemon;
  constructor(private pokemonSvc: PokemonService){}
  ngOnInit(): void {
    this.pokemonSvc.getPokemon(6).subscribe(pokemon => {
      this.charizard = pokemon;
      // console.log(pokemon);
    });
  }

}
