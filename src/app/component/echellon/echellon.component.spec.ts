import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchellonComponent } from './echellon.component';

describe('EchellonComponent', () => {
  let component: EchellonComponent;
  let fixture: ComponentFixture<EchellonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchellonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchellonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
