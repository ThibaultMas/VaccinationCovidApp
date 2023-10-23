import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVaccinationCenterComponent } from './create-vaccination-center.component';

describe('CreateVaccinationCenterComponent', () => {
  let component: CreateVaccinationCenterComponent;
  let fixture: ComponentFixture<CreateVaccinationCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVaccinationCenterComponent]
    });
    fixture = TestBed.createComponent(CreateVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
