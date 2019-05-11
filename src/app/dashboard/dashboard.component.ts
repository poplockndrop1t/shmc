import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstRow = [
    {
      headerType: 'card-header-danger',
      route: '/upcoming-tournament',
      materialIcon: 'touch_app',
      info: 'Upcoming Tournament'
    },
    {
      headerType: 'card-header-success',
      route: '/tournament-schedule',
      materialIcon: 'calendar_today',
      info: 'Tournament Schedule'
    },
    {
      headerType: 'card-header-info',
      route: '/tournament-results',
      materialIcon: 'poll',
      info: 'Tournament Results'
    },
    {
      headerType: 'card-header-warning',
      route: '/photos',
      materialIcon: 'phone_iphone',
      info: 'Photos'
    }
  ];

  constructor() {}
  ngOnInit() {}

}
