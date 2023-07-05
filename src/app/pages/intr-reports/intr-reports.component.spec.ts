import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrReportsComponent } from './intr-reports.component';

describe('IntrReportsComponent', () => {
  let component: IntrReportsComponent;
  let fixture: ComponentFixture<IntrReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
