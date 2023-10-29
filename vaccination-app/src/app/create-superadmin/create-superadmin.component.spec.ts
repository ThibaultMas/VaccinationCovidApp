import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuperadminComponent } from './create-superadmin.component';

describe('CreateSuperadminComponent', () => {
  let component: CreateSuperadminComponent;
  let fixture: ComponentFixture<CreateSuperadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSuperadminComponent]
    });
    fixture = TestBed.createComponent(CreateSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
