import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomserviceComponent } from './customservice.component';

describe('CustomserviceComponent', () => {
  let component: CustomserviceComponent;
  let fixture: ComponentFixture<CustomserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
