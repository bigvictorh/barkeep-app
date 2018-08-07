import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  newcomponent = "This represents the drinks list"

  constructor() { }

  ngOnInit() {
  }

}
