import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HousesSearchComponent } from './houses-search/houses-search.component';
import { HousesComponent } from './houses/houses.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'houses-search', component: HousesSearchComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: 'detail/:mls', component: HouseDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],  
  declarations: [],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
