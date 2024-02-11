import { Injectable } from '@angular/core';
import { Country } from './interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.com/v3.1/';

  constructor (private http : HttpClient) {};
  
  async getCountries(countryName : string) : Promise<Country[]> {
    const data  = await fetch(`${this.url}name/${countryName}`);
    return (await data.json()) ?? [];
  }

  getCountriesByCaptial(capital : string): Observable<Country[]> {
    const url = `${this.url}/capital/${capital}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  async getCountriesByRegion(region : string) : Promise<Country[]> {
    const data  = await fetch(`${this.url}capital/${region}`);
    return (await data.json()) ?? [];
  }
}
