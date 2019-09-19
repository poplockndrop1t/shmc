import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('content') modal;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.open(this.modal);
  }

  closeState = '';

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeState = `Closed with: ${result}`;
    });
  }

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

  secondRow = [
    {
      headerType: 'card-header-warning',
      route: '/handicaps',
      materialIcon: 'golf_course',
      info: 'Current Handicaps'
    },
    {
      headerType: 'card-header-danger',
      route: '/minutes',
      materialIcon: 'attachment',
      info: 'Mens Club Meeting Minutes'
    },
    {
      headerType: 'card-header-success',
      route: '/super-report',
      materialIcon: 'work',
      info: 'Superintendent Report'
    },
    {
      headerType: 'card-header-info',
      route: '/new-rules',
      materialIcon: 'new_releases',
      info: 'USGA: New Rules'
    }
  ];

  showModal = true;
}
