import { Injectable } from '@angular/core';
import { Adapter } from '../adapter/adapter';

export class Planets {
    constructor(
        public name: string,
        public rotation_period: string,
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
        public terrain: string,
        public surface_water: string,
        public population: string,
        public residents: string[],
        public films: string[],
        public created: Date,
        public edited: Date,
        public url: string,
    ) {}
}

@Injectable({providedIn: 'root'})

export class PlanetsAdapter implements Adapter<Planets> {
    adapt(planet: any): Planets {
        return new Planets(planet.name, planet.rotation_period, planet.orbital_period
            , planet.diameter, planet.climate, planet.gravity, planet.terrain, planet.surface_water
            , planet.population, planet.residents,planet.films, new Date(planet.created), new Date(planet.edited), planet.url);
    }
}