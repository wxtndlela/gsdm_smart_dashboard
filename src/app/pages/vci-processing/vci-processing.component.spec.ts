import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VciProcessingComponent } from './vci-processing.component';

describe('VciProcessingComponent', () => {
  let component: VciProcessingComponent;
  let fixture: ComponentFixture<VciProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VciProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VciProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
