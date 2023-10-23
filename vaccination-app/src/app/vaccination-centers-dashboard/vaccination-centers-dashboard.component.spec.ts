import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCentersDashboardComponent } from './vaccination-centers-dashboard.component';

describe('VaccinationCentersDashboardComponent', () => {
  let component: VaccinationCentersDashboardComponent;
  let fixture: ComponentFixture<VaccinationCentersDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationCentersDashboardComponent]
    });
    fixture = TestBed.createComponent(VaccinationCentersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
