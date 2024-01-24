import { Component } from '@angular/core';
import { Personaje } from '../personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent{

  personajes : Personaje[] = [
  {
    id : 1,
    nombre : 'Crack',
    nivel : 10
  },
  {
    id: 2,
    nombre : 'Wata',
    nivel : 11
  },
  {
    id: 3,
    nombre : 'Hell',
    nivel : 12
  }
  ];

  personajeSel : Personaje | undefined; // declara la propiedad personajeSel para guardar el personaje sobre el que hacemos clic

  onSelect(personaje: Personaje): void {
    this.personajeSel = personaje;
  }
}
