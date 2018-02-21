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

  clickAdd(name: string, mls: number, street1: string,
    street2: string, city: string, state: string, zipcode: number,
    neighborhood: string, salesPrice: number, dateListed: string,
    bedrooms: number, photos: string, bathrooms: number, garageSize: number,
    squareFeet: number, lotSize: number, description: string) {
      let house: House = new House();
      house.name = name;
      house.mls = mls;
      house.street1 = street1;
      house.street2 = street2;
      house.city = city;
      house.state = state;
      house.zipcode = zipcode;
      house.neighborhood = neighborhood;
      house.salesPrice = salesPrice;
      house.dateListed = dateListed;
      house.bedrooms = bedrooms;
      house.photos = photos;
      house.bathrooms = bathrooms;
      house.garageSize = garageSize;
      house.squareFeet = squareFeet;
      house.lotSize = lotSize;
      house.description = description;
      
      this.houseAdded.emit(house);
  }
}
