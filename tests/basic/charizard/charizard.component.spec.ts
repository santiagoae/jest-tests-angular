import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service:PokemonService;
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharizardComponent, HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be match whit the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  })

  test('should show a loading at the start', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  test('should load to charizard inmediatly', () => {
    const dummyPokemon = {
      name: 'charizardo',
      sprites:{
        front_default:'https://charizard.com/sprite.png'
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);//se toma la respuesta con el objeto que se esta creando dentro de la funcion
    fixture.detectChanges();//dispara el ciclo de vida de angular regenera los componentes y los vuelve a llamar
    // console.log(compiled.innerHTML);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase()).toContain(dummyPokemon.name?.toLocaleLowerCase());
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);

  });
});
