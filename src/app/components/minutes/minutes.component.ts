import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  toggleShown = {
    'October 8th, 2019': true,
    'May 14th, 2019': false,
    'March 12, 2019': false,
    'January 8th, 2019': false
  }

  handleClick(e) {
    if (this.toggleShown[e.target.innerText]) {
      this.toggleShown[e.target.innerText] = false;
    } else {
      this.toggleShown[e.target.innerText] = true;
    }
  }
}
