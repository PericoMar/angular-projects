import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../country.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  country : any;
  countriesService : CountryService = inject(CountryService);
  constructor(private activatedRoute: ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
    switchMap( ({ id }) => this.countriesService.getCountryByAlphaCode( id ))
      )
        .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        });
  }
}
