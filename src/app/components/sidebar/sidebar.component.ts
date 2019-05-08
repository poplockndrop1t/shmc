import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',           title: 'Dashboard',             icon: 'dashboard',     class: '' },
  { path: '/upcoming-tournament', title: 'Upcoming Tournament',   icon: 'touch_app',     class: '' },
  { path: '/tournament-schedule', title: 'Tournament Schedule',   icon: 'calendar_today', class: '' },
  { path: '/tournament-results',  title: 'Tournament Results',    icon: 'poll', class: '' },
  { path: '/photos',              title: 'Photos',                icon: 'phone_iphone',  class: '' },
  { path: '/handicaps',           title: 'Current Handicaps',     icon: 'golf_course',          class: '' },
  { path: '/minutes',             title: 'Meeting Minutes',       icon: 'attachment',           class: '' },
  { path: '/super-report',        title: 'Superindendent Report', icon: 'work',         class: '' },
  { path: '/new-rules',           title: 'New Rules',             icon: 'new_releases',  class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
