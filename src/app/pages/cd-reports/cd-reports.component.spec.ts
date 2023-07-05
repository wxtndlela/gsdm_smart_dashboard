import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdReportsComponent } from './cd-reports.component';

describe('CdReportsComponent', () => {
  let component: CdReportsComponent;
  let fixture: ComponentFixture<CdReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
