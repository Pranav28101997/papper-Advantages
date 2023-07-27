import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { Feedback } from '../models/feedback-home-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  feedbackCollection!: Feedback[];
  translations: any; // Declare as any to handle dynamic JSON data.

  constructor(
    private _utilityService: UtilityService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._utilityService.getFeedbackData();
    this.getFeedbackData();
    this.getCultures();
  }

  /**
   * @Description : To get feedback data from mock file
   */
  getFeedbackData(): void {
    this._utilityService.feedbackData$.subscribe((feedbackData: Feedback[]) => {
      if (feedbackData) {
        this.feedbackCollection = feedbackData;
      }
    });
  }

  /**
   * @description : To navigate to new feedback form
   */
  addNewFeedback(): void {
    this._router.navigateByUrl('/feedback-form');
  }

  /**
   * @description : To get translation cultures from en.json
   */
  getCultures(): void {
    this._utilityService.getTranslations().subscribe((data: any) => {
      this.translations = data;
    });
  }
}
