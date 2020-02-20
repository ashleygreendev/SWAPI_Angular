export interface Adapter<T> {
    adapt(person: any): T;
    adapt(movie: any): T;
    adapt(planet: any): T;
}