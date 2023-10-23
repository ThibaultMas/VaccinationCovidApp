import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycenterDashboardComponent } from './mycenter-dashboard.component';

describe('MycenterDashboardComponent', () => {
  let component: MycenterDashboardComponent;
  let fixture: ComponentFixture<MycenterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycenterDashboardComponent]
    });
    fixture = TestBed.createComponent(MycenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
