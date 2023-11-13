import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterAdminsdoctorsComponent } from './vaccination-center-adminsdoctors.component';

describe('VaccinationCenterAdminsdoctorsComponent', () => {
  let component: VaccinationCenterAdminsdoctorsComponent;
  let fixture: ComponentFixture<VaccinationCenterAdminsdoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationCenterAdminsdoctorsComponent]
    });
    fixture = TestBed.createComponent(VaccinationCenterAdminsdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
