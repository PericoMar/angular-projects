import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Introduce el término de búsqueda...';
  @Output() newSearch: EventEmitter<string> = new EventEmitter<string>();

  onNewSearch(event: any) {
    this.newSearch.emit(event.target.value);
  }
}
