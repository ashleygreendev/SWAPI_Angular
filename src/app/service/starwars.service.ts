import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { People, PeopleAdapter } from '../model/people.model';
import { Movies, MoviesAdapter } from '../model/movies.model';
import { Planets, PlanetsAdapter } from '../model/planets.model';

@Injectable({
    providedIn: "root"
})
export class StarWarsService {
    constructor (private http: HttpClient, private adapter: PeopleAdapter, private movieAdapter: MoviesAdapter, private planetsAdapter: PlanetsAdapter) {}

    getPeople(): Observable<People[]> {
        return this.http
        .get('https://swapi.co/api/people/')
        .pipe(map((data: any[]) => data.map(person => this.adapter.adapt(person))));
    } 

    getMovies(): Observable<Movies[]> {
        return this.http
        .get('https://swapi.co/api/films/')
        .pipe(map((data: any[]) => data.map(movie => this.movieAdapter.adapt(movie))));
    }

    getPlanets(): Observable<Planets[]> {
        return this.http
        .get('https://swapi.co/api/planets/')
        .pipe(map((data: any[]) => data.map(planet => this.planetsAdapter.adapt(planet))));
    }
}