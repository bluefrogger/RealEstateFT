import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { HouseAddComponent } from './house-add/house-add.component';
import { AppRoutingModule } from './/app-routing.module';
import { HousesSearchComponent } from './houses-search/houses-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseDetailComponent,
    HouseEditComponent,
    HouseAddComponent,
    HousesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
