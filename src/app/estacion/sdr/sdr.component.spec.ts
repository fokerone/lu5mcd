import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrComponent } from './sdr.component';

describe('SdrComponent', () => {
  let component: SdrComponent;
  let fixture: ComponentFixture<SdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdrComponent]
    });
    fixture = TestBed.createComponent(SdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
