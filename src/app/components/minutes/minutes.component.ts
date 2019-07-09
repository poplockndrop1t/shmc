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
    'May 14th, 2019': true,
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
