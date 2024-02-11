import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/country';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input() countries : Country[] = [];
}
