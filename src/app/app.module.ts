import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterOddChallengeComponent } from './challenges/filter-odd-challenge/filter-odd-challenge.component';
import { FilterPalindromesComponent } from './challenges/filter-palindromes/filter-palindromes.component';
import { FibonacciSequenceComponent } from './challenges/fibonacci-sequence/fibonacci-sequence.component';
import { ArrayMutationComponent } from './challenges/array-mutation/array-mutation.component';
import { ObjectMapping1Component } from './challenges/object-mapping1/object-mapping1.component';
import { ObjectMapping2Component } from './challenges/object-mapping2/object-mapping2.component';
import { ObjectFilterComponent } from './challenges/object-filter/object-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterOddChallengeComponent,
    FilterPalindromesComponent,
    FibonacciSequenceComponent,
    ArrayMutationComponent,
    ObjectMapping1Component,
    ObjectMapping2Component,
    ObjectFilterComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
