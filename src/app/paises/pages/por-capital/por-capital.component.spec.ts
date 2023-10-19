import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCapitalComponent } from './por-capital.component';

describe('PorCapitalComponent', () => {
  let component: PorCapitalComponent;
  let fixture: ComponentFixture<PorCapitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorCapitalComponent]
    });
    fixture = TestBed.createComponent(PorCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
