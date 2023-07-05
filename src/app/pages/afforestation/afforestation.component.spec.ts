import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfforestationComponent } from './afforestation.component';

describe('AfforestationComponent', () => {
  let component: AfforestationComponent;
  let fixture: ComponentFixture<AfforestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfforestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfforestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
