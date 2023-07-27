import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../../app/models/feedback-home-model';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {
  @Input() feedbackData: Feedback = {
    comment: '',
    rating: 0,
    date: '',
    starCount: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
