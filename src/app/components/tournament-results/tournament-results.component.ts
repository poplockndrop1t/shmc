import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-results',
  templateUrl: './tournament-results.component.html',
  styleUrls: ['./tournament-results.component.css']
})
export class TournamentResultsComponent implements OnInit {
  sparkyAnderson2019 = [
    {
      flight: "A",
      player: "Scott Linklater, and Kevin O'Toole"
      gross: 72,
      net: 64,
      place: ""
    },
    {
      flight: "A",
      player: "Jeff Halloran, and Eddie Lindgren",
      gross: 73,
      net: 64,
      place: ""
    }
  ];

  constructor() {}

  ngOnInit() {}

}