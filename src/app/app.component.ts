import { Component } from '@angular/core';
import { StarWarsService } from './service/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI';

  constructor(private starWarsService: StarWarsService) {}

  people = {};
  movies = {};
  planets = {};

  getPeople() {
    this.starWarsService.getPeople().subscribe(data => this.people = data);
  }
  getMovies() {
    this.starWarsService.getMovies().subscribe(data => this.movies = data);
  }
  getPlanets() {
    this.starWarsService.getPlanets().subscribe(data => this.planets = data);
  }

}
