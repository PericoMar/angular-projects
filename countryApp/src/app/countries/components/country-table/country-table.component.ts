import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input() countries : [] = [];
}
