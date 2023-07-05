import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureManComponent } from './furniture-man.component';

describe('FurnitureManComponent', () => {
  let component: FurnitureManComponent;
  let fixture: ComponentFixture<FurnitureManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
