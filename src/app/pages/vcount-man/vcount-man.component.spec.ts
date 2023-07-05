import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcountManComponent } from './vcount-man.component';

describe('VcountManComponent', () => {
  let component: VcountManComponent;
  let fixture: ComponentFixture<VcountManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcountManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcountManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
