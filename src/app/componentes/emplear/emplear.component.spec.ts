import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplearComponent } from './emplear.component';

describe('EmplearComponent', () => {
  let component: EmplearComponent;
  let fixture: ComponentFixture<EmplearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
