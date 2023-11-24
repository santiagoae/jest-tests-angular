import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter:number = 10;

  increaseBy(value:number){
    this.counter += value;
    // TODO::
    console.log({newValue: this.counter}); 
  }
}
