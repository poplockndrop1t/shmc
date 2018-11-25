import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  Photos = [
    {
      name: 'Rob Jacobus',
      src: 'assets/img/shmc_pics/2018_club_championships/rob_jacobus.png',
      desc: '2018 Club Champion.'
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/1.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/2.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/3.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/4.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/5.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/6.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/7.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/8.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/9.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/10.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/11.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/12.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/13.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/14.png',
      desc: ''
    },
    {
      name: '',
      src: 'assets/img/shmc_pics/2018_member_guest/15.png',
      desc: ''
    },
    {
      name: 'Brodie Munroe and Rick Cromwell',
      src: 'assets/img/shmc_pics/2018_member_member/brodie_rick.png',
      desc: '1st Place Gross Champions.'
    },
    {
      name: 'Ron Fernandez',
      src: 'assets/img/shmc_pics/2018_member_member/ron_fernandez.png',
      desc: 'Shot of the Tournament - Ron Fernandez\'s tee shot on #17.  Yes he made the putt!!'
    }
  ]


  ngOnInit() {
  }
}

