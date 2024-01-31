import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {
  @Output() diceRolled: EventEmitter<number> = new EventEmitter<number>();
  public randomNumber: number = 0;

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 6) + 1;
    this.diceRolled.emit(this.randomNumber);
  }
}
