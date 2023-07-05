import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteManComponent } from './site-man.component';

describe('SiteManComponent', () => {
  let component: SiteManComponent;
  let fixture: ComponentFixture<SiteManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
