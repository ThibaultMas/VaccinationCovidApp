import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionsComponent } from './dashboard-sections.component';

describe('DashboardSectionsComponent', () => {
  let component: DashboardSectionsComponent;
  let fixture: ComponentFixture<DashboardSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionsComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
