import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiUploadMediaComponent } from './ri-upload-media.component';

describe('RiUploadMediaComponent', () => {
  let component: RiUploadMediaComponent;
  let fixture: ComponentFixture<RiUploadMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiUploadMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiUploadMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
