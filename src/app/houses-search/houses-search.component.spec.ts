import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesSearchComponent } from './houses-search.component';

describe('HousesSearchComponent', () => {
  let component: HousesSearchComponent;
  let fixture: ComponentFixture<HousesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
