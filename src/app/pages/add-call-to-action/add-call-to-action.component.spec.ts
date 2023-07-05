import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCallToActionComponent } from './add-call-to-action.component';

describe('AddCallToActionComponent', () => {
  let component: AddCallToActionComponent;
  let fixture: ComponentFixture<AddCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCallToActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
