import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfReportsComponent } from './sf-reports.component';

describe('SfReportsComponent', () => {
  let component: SfReportsComponent;
  let fixture: ComponentFixture<SfReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
