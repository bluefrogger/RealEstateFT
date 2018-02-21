import { House } from '../models/house';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  @Input()
  house: House;

  constructor() { }

  ngOnInit() {
  }

}
