import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopertyBindingComponent } from './poperty-binding.component';

describe('PopertyBindingComponent', () => {
  let component: PopertyBindingComponent;
  let fixture: ComponentFixture<PopertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
