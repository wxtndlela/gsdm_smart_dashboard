import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolitionsComponent } from './demolitions.component';

describe('DemolitionsComponent', () => {
  let component: DemolitionsComponent;
  let fixture: ComponentFixture<DemolitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemolitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
