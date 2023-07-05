import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentRecorderComponent } from './segment-recorder.component';

describe('SegmentRecorderComponent', () => {
  let component: SegmentRecorderComponent;
  let fixture: ComponentFixture<SegmentRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentRecorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
