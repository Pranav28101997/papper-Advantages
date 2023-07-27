import { Injectable } from '@angular/core';
import { CONSTANTS } from '../app/constants/pepper-advantage-constants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { feedback } from '../mock-data/mock-data';
import { Feedback } from '../app/models/feedback-home-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  feedbackData!: Feedback[] | any;
  private feedbacks = new BehaviorSubject<any>(this.feedbackData);
  feedbackData$ = this.feedbacks.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  /**
   * @description : To authenticate user with right credentials
   * @param loginForm : { username: string; password: string }
   * @returns : boolean
   */
  authenticateUser(loginForm: { username: string; password: string }): boolean {
    if (
      loginForm.username === CONSTANTS.userId &&
      loginForm.password === CONSTANTS.password
    ) {
      sessionStorage.setItem('username', loginForm.username);
      sessionStorage.setItem('password', loginForm.password);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @description : To get translations from culture files
   * @returns : Observable<any>
   */
  getTranslations(): Observable<any> {
    return this.http.get('assets/locale/en.json');
  }

  /**
   * @description : To get data of feedbacks for home page
   */
  getFeedbackData(): void {
    this.feedbackData = feedback?.feedbacks;
    this.feedbacks.next(this.feedbackData);
  }

  /**
   * @description : Get comment from feedback form;
   * @param ratingForm :{ratingComment : string}
   * @returns : string
   */
  getComment(ratingForm: { ratingComment: string }): string {
    return ratingForm?.ratingComment;
  }

  /**
   * @description : To add new object to feedbackData array
   * @param newFeedback : Feedback
   */
  saveFeedbackData(newFeedback: Feedback): void {
    this.feedbackData?.push(newFeedback);
    this.feedbacks.next(this.feedbackData);
  }

  /**
   * @description : To open toast message
   * @param message :string;
   * @param action :string;
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
