import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiReportsComponent } from './ri-reports.component';

describe('RiReportsComponent', () => {
  let component: RiReportsComponent;
  let fixture: ComponentFixture<RiReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
