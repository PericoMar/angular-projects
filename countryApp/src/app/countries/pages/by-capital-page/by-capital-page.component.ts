import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryService } from '../../country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  capital: string = '';
  countriesByCapital: Country[] = [];
  // inject crea una instancia de un servicio para poder usar sus metodos
  countriesService: CountryService = inject(CountryService);

  handleSearchTextChange(searchText: string) {
    this.capital = searchText;
    if (this.capital != '') {
      this.countriesService.getCountriesByCaptial(this.capital).then((countriesByCapital: Country[]) => {
        this.countriesByCapital = countriesByCapital;
        console.log(this.countriesByCapital)
      });
    }
  }
}
