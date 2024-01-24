import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'angular-project';
  count : number = 10;

  increase(): void {
    this.count++;
  }

  decrease(): void{
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
