import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhfComponent } from './vhf.component';

describe('VhfComponent', () => {
  let component: VhfComponent;
  let fixture: ComponentFixture<VhfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VhfComponent]
    });
    fixture = TestBed.createComponent(VhfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
