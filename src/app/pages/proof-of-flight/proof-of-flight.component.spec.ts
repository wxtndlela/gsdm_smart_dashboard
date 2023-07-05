import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfFlightComponent } from './proof-of-flight.component';

describe('ProofOfFlightComponent', () => {
  let component: ProofOfFlightComponent;
  let fixture: ComponentFixture<ProofOfFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofOfFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofOfFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
