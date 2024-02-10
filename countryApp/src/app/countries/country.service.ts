import { Injectable } from '@angular/core';
import { Country } from './interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.com/v3.1/';
  async getCountries(countryName : string) : Promise<Country[]> {
    const data  = await fetch(`${this.url}name/${countryName}`);
    return (await data.json()) ?? [];
  }

  async getCountriesByCaptial(capital : string) : Promise<Country[]> {
    const data  = await fetch(`${this.url}capital/${capital}`);
    return (await data.json()) ?? [];
  }

  async getCountriesByRegion(region : string) : Promise<Country[]> {
    const data  = await fetch(`${this.url}capital/${region}`);
    return (await data.json()) ?? [];
  }
}
