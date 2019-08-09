import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteldirectx-home',
  templateUrl: './hoteldirectx-home.component.html',
  styleUrls: ['./hoteldirectx-home.component.scss']
})
export class HoteldirectxHomeComponent implements OnInit {

  hotelsee: boolean;
  otasee: boolean;
  techsee: boolean;

  constructor() { }

  ngOnInit() {
  }

}
