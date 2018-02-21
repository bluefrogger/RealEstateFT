import { House } from '../models/house';
import { HOUSES } from '../data/mock-houses';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: House[] = HOUSES;
  selectedHouse: House;
  
  constructor() { }

  ngOnInit() {
  }

  onEdit(house: House): void {
    this.selectedHouse = house;
  }

  onDelete(house: House): void {
    this.houses.forEach((item, index) => {
      if (item === house) {
        this.houses.splice(index, 1);
      }
    });
  }

  onAdd(house: House): void {
    this.houses.push(house);
  };

}
