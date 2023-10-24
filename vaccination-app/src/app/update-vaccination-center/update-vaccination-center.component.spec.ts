import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccinationCenterComponent } from './update-vaccination-center.component';

describe('UpdateVaccinationCenterComponent', () => {
  let component: UpdateVaccinationCenterComponent;
  let fixture: ComponentFixture<UpdateVaccinationCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVaccinationCenterComponent]
    });
    fixture = TestBed.createComponent(UpdateVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
