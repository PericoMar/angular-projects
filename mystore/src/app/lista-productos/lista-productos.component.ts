import { Component } from '@angular/core';
import { productos } from '../productos';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { AlertaProductoComponent } from '../alerta-producto/alerta-producto.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule , AlertaProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos = productos;

  compartir(producto : Producto) {
    alert(`El producto ${producto.nombre} ha sido compartido`);
  }

  onAviso() {
    alert("Avisoooo");
  }
}
