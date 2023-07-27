import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnInit {
  @Input() rating: number | any = 0;
  @Input() starCount: number | any = 5;
  @Output() ratingUpdated = new EventEmitter();

  ratingArr: Array<number> = [];

  constructor() {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) : boolean {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) : string {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
