import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcReportsComponent } from './vc-reports.component';

describe('VcReportsComponent', () => {
  let component: VcReportsComponent;
  let fixture: ComponentFixture<VcReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
