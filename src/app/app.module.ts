import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinksComponent,
    DrinkDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
