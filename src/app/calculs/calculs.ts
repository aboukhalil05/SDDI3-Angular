import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculs',
  imports: [FormsModule],
  templateUrl: './calculs.html',
  styleUrl: './calculs.css',
})
export class Calculs {
  op1: number = 0;
  op2: number = 0;
  res: number = 0;

  add(): void {
    this.res = this.op1 + this.op2;
  }

  mul(): void {
    this.res = this.op1 * this.op2;
  }

  div(): void {
    this.res = this.op1 / this.op2;
  }

  sub(): void {
    this.res = this.op1 - this.op2;
  }
}