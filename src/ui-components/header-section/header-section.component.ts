import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent implements OnInit {
  @Output() openSideBar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openSideNav(): void {
    this.openSideBar.emit();
  }
}
