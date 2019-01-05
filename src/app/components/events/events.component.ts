import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
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
    },
    {
      name: 'Anzures and Blake',
      src: 'assets/img/shmc_pics/2018_presidents_cup/anzures_blake.png',
      desc: ''
    },
    {
      name: 'Berger and Struck',
      src: 'assets/img/shmc_pics/2018_presidents_cup/berger_struck.png',
      desc: ''
    },
    {
      name: 'Eddie in his Rain Gear',
      src: 'assets/img/shmc_pics/2018_presidents_cup/eddie.png',
      desc: ''
    },
    {
      name: 'A Flight: 1st Place',
      src: 'assets/img/shmc_pics/2018_presidents_cup/lopez_neufeld_steven_fernandez.png',
      desc: 'Ron Fernandez, Bradley Steven, Alex Lopez, and Tim Neufeld'
    },
    {
      name: 'B Flight: 1st Place',
      src: 'assets/img/shmc_pics/2018_presidents_cup/lytle_fernandez_mcnulty_paschal.png',
      desc: 'Nate Lytle, Cam Fernandez, Kenny Paschal, and Benny McNulty'
    }
  ];

  constructor() {}

  ngOnInit() {}
}