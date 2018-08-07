import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { DRINKS } from '../mock-drinks';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drink: Drink = {
    id: 1,
    name: 'Old Fashioned'
  };

  drinks = DRINKS;

  constructor() { }

  ngOnInit() {
  }

}
