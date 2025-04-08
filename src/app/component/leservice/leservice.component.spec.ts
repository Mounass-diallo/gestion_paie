import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeserviceComponent } from './leservice.component';

describe('LeserviceComponent', () => {
  let component: LeserviceComponent;
  let fixture: ComponentFixture<LeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
