import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStoresComponent } from './medical-stores.component';

describe('MedicalStoresComponent', () => {
  let component: MedicalStoresComponent;
  let fixture: ComponentFixture<MedicalStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
