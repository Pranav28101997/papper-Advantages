import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderSectionComponent } from './header-section/header-section.component';




@NgModule({
  declarations: [
    FeedbackCardComponent,
    RatingStarComponent,
    HeaderSectionComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FeedbackCardComponent,
    RatingStarComponent,
    HeaderSectionComponent
  ]
})
export class UiComponentsModule { }
