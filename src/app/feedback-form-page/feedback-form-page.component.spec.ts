import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormPageComponent } from './feedback-form-page.component';

describe('FeedbackFormPageComponent', () => {
  let component: FeedbackFormPageComponent;
  let fixture: ComponentFixture<FeedbackFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
