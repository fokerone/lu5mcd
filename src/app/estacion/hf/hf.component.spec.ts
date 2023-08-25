import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfComponent } from './hf.component';

describe('HfComponent', () => {
  let component: HfComponent;
  let fixture: ComponentFixture<HfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HfComponent]
    });
    fixture = TestBed.createComponent(HfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
