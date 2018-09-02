import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { DRINKS } from '../mock-drinks';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  test : boolean = true;
  drinks = DRINKS;

  // drinks = [
  //   {name: "Old Fashioned", id: 1},
  //   {name: "Juan Collins", id: 2},
  //   {name: "Japanese Slipper", id: 3}
  // ];

  selectedDrink: Drink;

  

  

  constructor() { }

  ngOnInit() {
  }

  onSelect(drink: Drink): void {
    this.selectedDrink = drink;
  }

  checkClicked(val){
    if(val){
      this.test = false;
    } else{
      this.test = true;
    }
    console.log(val);
}

}
