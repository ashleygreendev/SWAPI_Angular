import { Injectable } from '@angular/core';
import { Adapter } from '../adapter/adapter';

export class Movies {
    constructor(
        public title: string,
        public episode_id: number,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string,
        public characters: string[],
        public planets: string[],
        public starships: string[],
        public vehicles: string[],
        public species: string[],
        public created: Date,
        public edited: Date,
        public url: string,
    ) {}
}

@Injectable({providedIn: 'root'})

export class MoviesAdapter implements Adapter<Movies> {
    adapt(movie: any): Movies {
        return new Movies(movie.title, movie.episode_id, movie.opening_crawl, movie.director
            , movie.producer, movie.release_date, movie.characters, movie.planets, movie.starships
            ,movie.vehicles, movie.species, new Date(movie.created), new Date(movie.edited), movie.url);
    }
}