import { HOUSES } from './../data/mock-houses';
import { House } from '../models/house';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-house-add',
  templateUrl: './house-add.component.html',
  styleUrls: ['./house-add.component.css']
})
export class HouseAddComponent implements OnInit {
  @Output()
  houseAdded: EventEmitter<House> = new EventEmitter<House>();

  constructor() { }

  ngOnInit() {
  }

  clickAdd(houseName: string, houseMls: number) {
    let house: House = new House();
    house.name = houseName;
    house.mls = houseMls;
    
    this.houseAdded.emit(house);
  }
}
