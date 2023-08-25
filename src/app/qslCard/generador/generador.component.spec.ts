import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorComponent } from './generador.component';

describe('GeneradorComponent', () => {
  let component: GeneradorComponent;
  let fixture: ComponentFixture<GeneradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneradorComponent]
    });
    fixture = TestBed.createComponent(GeneradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
