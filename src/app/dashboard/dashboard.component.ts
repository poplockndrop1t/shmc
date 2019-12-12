import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  firstRow = [
    {
      headerType: 'card-header-primary',
      route: '/upcoming-tournament',
      materialIcon: 'touch_app',
      info: 'Upcoming Tournament'
    },
    {
      headerType: 'card-header-primary',
      route: '/tournament-schedule',
      materialIcon: 'calendar_today',
      info: 'Tournament Schedule'
    },
    {
      headerType: 'card-header-primary',
      route: '/tournament-results',
      materialIcon: 'poll',
      info: 'Tournament Results'
    },
    {
      headerType: 'card-header-primary',
      route: '/photos',
      materialIcon: 'phone_iphone',
      info: 'Photos'
    }
  ];

  secondRow = [
    {
      headerType: 'card-header-primary',
      route: '/handicaps',
      materialIcon: 'golf_course',
      info: 'Current Handicaps'
    },
    {
      headerType: 'card-header-primary',
      route: '/minutes',
      materialIcon: 'attachment',
      info: 'Mens Club Meeting Minutes'
    },
    {
      headerType: 'card-header-primary',
      route: '/super-report',
      materialIcon: 'work',
      info: 'Superintendent Report'
    },
    {
      headerType: 'card-header-primary',
      route: '/new-rules',
      materialIcon: 'new_releases',
      info: 'USGA: New Rules'
    }
  ];
}
