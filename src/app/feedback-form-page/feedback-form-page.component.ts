import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Feedback } from '../models/feedback-home-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feedback-form-page',
  templateUrl: './feedback-form-page.component.html',
  styleUrls: ['./feedback-form-page.component.scss'],
})
export class FeedbackFormPageComponent implements OnInit {
  ratingForm: FormGroup = new FormGroup({
    ratingComment: new FormControl(),
  });
  translations: any; // Declare as any to handle dynamic JSON data.
  rating: number = 0;
  starCount: number = 5;

  constructor(
    private _utilityService: UtilityService,
    private _router: Router,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCultures();
    this._utilityService.getFeedbackData();
    this.ratingForm = this.formBuilder?.group({
      ratingComment: ['', Validators.required],
    });
  }

  /**
   * @Description : To change the rating of feedback
   * @param rating
   */
  onRatingChanged(rating: any) {
    this.rating = rating;
  }

  /**
   * @description : To get translation cultures from en.json
   */
  getCultures(): void {
    this._utilityService.getTranslations().subscribe((data: any) => {
      this.translations = data;
    });
  }

  /**
   * @description : To submit the feedback which was received
   */
  onSubmit(): void {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'dd/MM/yyyy');
    if (this.ratingForm?.valid && this.rating>0) {
      const comment = this.ratingForm.value;
      const newFeedback: Feedback = {
        comment: this._utilityService.getComment(this.ratingForm?.value),
        starCount: 5,
        rating: this.rating,
        date: formattedDate,
      };
      this._utilityService.saveFeedbackData(newFeedback);
      this._utilityService.openSnackBar(
        'Feedback Added successfully !!',
        'Close'
      );
      this.navigateToHomePage();
    }
    else {
      this._utilityService.openSnackBar(
        'Please Add feedback comment and rating to submit the feedback form',
        'Close'
      );
    }
  }

  /**
   * @description : To navigate back to home page
   */
  navigateToHomePage(): void {
    this._router.navigateByUrl('/home');
  }
}
