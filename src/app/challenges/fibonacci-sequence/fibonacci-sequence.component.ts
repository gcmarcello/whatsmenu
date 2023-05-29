import { Component } from '@angular/core';
import clearArray from '../../utils/clearArray';

@Component({
  selector: 'app-fibonacci-sequence',
  templateUrl: './fibonacci-sequence.component.html',
})
export class FibonacciSequenceComponent {
  numbers: number[] = [];
  error: string | null = null;

  clearChallenge() {
    clearArray(this);
  }

  findFibonacci(number: String) {
    this.clearChallenge();
    const parsedNumber = Number(number);
    this.numbers.push(0, 1);
    for (let i = 1; i < parsedNumber; i++) {
      if (this.numbers[i] + this.numbers[i - 1] > parsedNumber) return;
      this.numbers.push(this.numbers[i] + this.numbers[i - 1]);
    }
  }
}
