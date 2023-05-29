import { Component } from '@angular/core';
import clearArray from '../../utils/clearArray';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

@Component({
  selector: 'app-filter-palindromes',
  templateUrl: './filter-palindromes.component.html',
})
export class FilterPalindromesComponent {
  words: string[] = [];
  error: string | null = null;

  clearChallenge() {
    clearArray(this);
  }

  filterPalindromes(string: string) {
    this.clearChallenge();
    const validFormat = /^[\wáàâãéèêíïóôõöúçñ]+(,\s*[\wáàâãéèêíïóôõöúçñ]+)*$/i;
    if (!validFormat.test(string)) {
      this.error = ERROR_MESSAGES.filterPalindromes;
      return;
    }
    const wordArray = string.split(/\s*,\s*/);
    const filterPalindromes = wordArray.filter(
      (word) => word.split('').reverse().join('') === word
    );
    this.words = filterPalindromes;
  }
}
