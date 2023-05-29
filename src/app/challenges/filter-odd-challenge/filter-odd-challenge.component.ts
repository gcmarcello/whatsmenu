import { Component } from '@angular/core';
import clearArray from '../../utils/clearArray';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

@Component({
  selector: 'app-filter-odd-challenge',
  templateUrl: './filter-odd-challenge.component.html',
})
export class FilterOddChallengeComponent {
  numbers: number[] = [];
  error: string | null = null;

  clearChallenge() {
    clearArray(this);
  }

  filterOddNumbers(number: String) {
    this.clearChallenge();
    const parsedNumber = Number(number);
    if (parsedNumber < 1) {
      this.error = ERROR_MESSAGES.filterOdd;
      return;
    }
    const numberArray: Array<number> = Array.from(
      Array(parsedNumber + 1).keys()
    ).filter((number) => number % 2 !== 0);
    this.numbers = numberArray;
  }
}
