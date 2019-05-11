import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-schedule',
  templateUrl: './tournament-schedule.component.html',
  styleUrls: ['./tournament-schedule.component.css']
})
export class TournamentScheduleComponent implements OnInit {
  tournaments = [
    {
      tournamentName: 'Superbowl Tournament - February 2nd',
      tournamentInfo: 'Chapman (Pinehurst) System'
    },
    {
      tournamentName: 'Presidents Cup - March 2nd - 3rd',
      tournamentInfo: 'Stableford Blind Draw Foursomes'
    },
    {
      tournamentName: 'March Madness Match Play',
      tournamentInfo: 'Individual Match Play'
    },
    {
      tournamentName: 'Sparky Anderson- April 13th',
      tournamentInfo: '2 Man Best Ball'
    },
    {
      tournamentName: 'Member/Guest - June 7th - 9th',
      tournamentInfo: '2 Man Better Ball'
    },
    {
      tournamentName: 'Club and Sr. Club Championship - July 12th - 14th',
      tournamentInfo: ''
    },
    {
      tournamentName: 'Member/Member - August 9th - 11th',
      tournamentInfo: 'Shamble Aggregate'
    },
    {
      tournamentName: 'Landry - September 13th - 15th',
      tournamentInfo: '2 Man Scramble Match Play'
    },
    {
      tournamentName: 'Impossible Open - October 19th',
      tournamentInfo: '4 Man Scramble'
    },
    {
      tournamentName: 'Turkey Shoot - November 9th',
      tournamentInfo: '2 Man Blind Draw'
    },
    {
      tournamentName: 'Skins Game - December 14th',
      tournamentInfo: '2 Man Better Ball'
    }
  ];
  constructor() {}

  ngOnInit() {}

}