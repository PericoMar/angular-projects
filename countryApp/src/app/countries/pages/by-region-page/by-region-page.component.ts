import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  placeholder : string = "Introduce la región del país que busca..."
  capital: string = '';
  countriesByRegion: Country[] = [];
  // inject crea una instancia de un servicio para poder usar sus metodos
  countriesService: CountryService = inject(CountryService);

  handleSearchTextChange(searchText: string) {
    this.capital = searchText;
    if (this.capital != '') {
      this.countriesService.getCountriesByRegion(this.capital).subscribe((countriesByRegion: Country[]) => {
        this.countriesByRegion = countriesByRegion;
      });
    }
  }
}
