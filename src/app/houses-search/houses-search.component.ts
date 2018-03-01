import { HOUSES } from './../data/mock-houses';
import { House } from './../models/house';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-search',
  templateUrl: './houses-search.component.html',
  styleUrls: ['./houses-search.component.css']
})
export class HousesSearchComponent implements OnInit {
  houses: House[] = HOUSES;
  searchHouses: House[];

  constructor() { }

  ngOnInit() {
  }

  searchMls(mls: number): void {
    this.searchHouses = this.houses.filter(house => house.mls == mls);
  }

  searchCity(city: string): void {
    this.searchHouses = this.houses.filter(house => house.city == city);
  }

  searchState(state: string): void {
    this.searchHouses = this.houses.filter(house => house.state == state);
  }

  searchZipcode(zipcode: number): void {
    this.searchHouses = this.houses.filter(house => house.zipcode == zipcode);
  }

  searchBedrooms(bedrooms: number): void {
    this.searchHouses = this.houses.filter(house => house.bedrooms == bedrooms);
  }

  searchBathrooms(bathrooms: number): void {
    this.searchHouses = this.houses.filter(house => house.bathrooms == bathrooms);
  }

  searchSquareFeet(squareFeet: number): void {
    this.searchHouses = this.houses.filter(house => house.squareFeet == squareFeet);
  }
}
