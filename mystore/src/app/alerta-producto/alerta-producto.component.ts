import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../producto';
import { productos } from '../productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta-producto.component.html',
  styleUrl: './alerta-producto.component.css'
})
export class AlertaProductoComponent {
  @Input() producto! : Producto;
  @Output() avisoClic = new EventEmitter<void>();

  avisame() {
    // Emitir el evento cuando se haga clic en el botón
    this.avisoClic.emit();
  }
}
