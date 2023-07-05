import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFootageComponent } from './site-footage.component';

describe('SiteFootageComponent', () => {
  let component: SiteFootageComponent;
  let fixture: ComponentFixture<SiteFootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteFootageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
