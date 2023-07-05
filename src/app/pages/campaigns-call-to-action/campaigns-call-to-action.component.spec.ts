import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsCallToActionComponent } from './campaigns-call-to-action.component';

describe('CampaignsCallToActionComponent', () => {
  let component: CampaignsCallToActionComponent;
  let fixture: ComponentFixture<CampaignsCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsCallToActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
