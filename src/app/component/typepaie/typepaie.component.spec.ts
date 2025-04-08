import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepaieComponent } from './typepaie.component';

describe('TypepaieComponent', () => {
  let component: TypepaieComponent;
  let fixture: ComponentFixture<TypepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypepaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
