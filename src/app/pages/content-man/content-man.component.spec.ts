import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManComponent } from './content-man.component';

describe('ContentManComponent', () => {
  let component: ContentManComponent;
  let fixture: ComponentFixture<ContentManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
