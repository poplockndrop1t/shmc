import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/super-report', title: 'Super Indendent Report', icon: 'notes', class: ''},
  { path: '/tournament-schedule', title: 'Tournament Schedule', icon: 'content_paste', class: '' },
  { path: '/upcoming-event', title: 'Upcoming Event', icon: 'queue', class: '' },
  { path: '/handicaps', title: 'Handicaps', icon: 'poll', class: '' },
  { path: '/new-rules', title: 'New Rules', icon: 'new_releases', class: '' },
  { path: '/photos', title: 'Photos', icon: 'dashboard', class: ''},
  { path: '/minutes', title: 'Meeting Minutes', icon: 'dashboard', class: '' },
  { path: '/tournament-results', title: 'Tournament Results', icon: 'library_books', class: '' }
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
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
