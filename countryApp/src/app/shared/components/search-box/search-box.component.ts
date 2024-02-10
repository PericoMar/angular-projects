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
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(event: any) {
    this.searchTextChange.emit(event.target.value);
  }
}
