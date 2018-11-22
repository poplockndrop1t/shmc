import { Component, OnInit } from '@angular/core';
// import { 2018_Club_Championships } from 'assets/img/shmc_pics/shmc_photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Championship_2018: any = '/assets/img/shmc_pics/shmc_photos.js';

  constructor() {}

  ngOnInit() {
    // this.Championship_2018 = 2018_Club_Championships;

    // console.log(this.Championship_2018, 'test');
  }

}