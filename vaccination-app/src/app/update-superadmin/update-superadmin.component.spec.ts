import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperadminComponent } from './update-superadmin.component';

describe('UpdateSuperadminComponent', () => {
  let component: UpdateSuperadminComponent;
  let fixture: ComponentFixture<UpdateSuperadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSuperadminComponent]
    });
    fixture = TestBed.createComponent(UpdateSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
