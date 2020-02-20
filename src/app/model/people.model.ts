import { Injectable } from '@angular/core';
import { Adapter } from '../adapter/adapter';

export class People {
    constructor(
        public name: string,
        public height: string,
        public mass: string,
        public hair_color: string,
        public skin_color: string,
        public eye_color: string,
        public birth_year: string,
        public gender: string,
        public homeworld: string,
        // public films: string[],
        // public species: string[],
        // public vehicles: string[],
        // public starships: string[],
        public created: Date,
        public edited: Date,
        public url: string
    ) {}
}

@Injectable({providedIn:'root'})

export class PeopleAdapter implements Adapter<People> {
    adapt(person: any): People {
        return new People(person.name, person.height, person.mass, person.hair_color, person.skin_color
            , person.eye_color, person.birth_year, person.geneder, person.homeworld, person.films
            , person.species, person.vehicles);
    }
}
