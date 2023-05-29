import { Component } from '@angular/core';

@Component({
  selector: 'app-array-mutation',
  templateUrl: './array-mutation.component.html',
})
export class ArrayMutationComponent {
  numbers: number[] = Array.from(Array(10), (_, index) => index + 1);

  mutateArray() {
    this.numbers.unshift(0);
    this.numbers.push(11);

    const fiveIndex = this.numbers.findIndex((value) => value === 5);
    this.numbers.splice(fiveIndex, 1);

    const eightIndex = this.numbers.findIndex((value) => value === 8);
    this.numbers.splice(eightIndex, 1, 20, 21, 22);
  }

  resetArray() {
    this.numbers = Array.from(Array(10), (_, index) => index + 1);
  }
}
