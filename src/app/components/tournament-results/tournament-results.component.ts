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
    },
    {
      flight: "A",
      player: "Tim Sower, David Govea",
      gross: 82,
      net: 74,
      place: ""
    },
    {
      flight: "A",
      player: "Vince Alvarez, and Josh Lipman",
      gross: 70,
      net: 62,
      place: "1st Gross"
    },
    {
      flight: "A",
      player: "Rob Jacobus, and Mike Brennan",
      gross: 73,
      net: 63,
      place: ""
    },
    {
      flight: "A",
      player: "Joe Freeth, Petter Barth",
      gross: 75,
      net: 63,
      place: ""
    },
    {
      flight: "A",
      player: "Kerry Redford, and Ken Paris",
      gross: 77,
      net: 67,
      place: ""
    },
    {
      flight: "A",
      player: "Ron Fernandez, and Peter Eyermann",
      gross: 78,
      net: 67,
      place: ""
    },
    {
      flight: "A",
      player: "Shawn Simon, and Ryan Ryusaki",
      gross: 75,
      net: 63,
      place: ""
    },
    {
      flight: "A",
      player: "Dustin Croick, and Mike Nep",
      gross: 76,
      net: 64,
      place: ""
    },
    {
      flight: "A",
      player: "Adam Herson, and James Meyer",
      gross: 79,
      net: 70,
      place: ""
    },
    {
      flight: "A",
      player: "Rick Brown, and Bobby Anzures",
      gross: 76,
      net: 63,
      place: ""
    },
    {
      flight: "A",
      player: "Mark Holder, and Jeff King",
      gross: 78,
      net: 66,
      place: ""
    },
    {
      flight: "A",
      player: "David Marcey, and Paul Williams",
      gross: 81,
      net: 69,
      place: ""
    },
    {
      flight: "A",
      player: "Rick Cromwell, and Chris Weinstock",
      gross: 73,
      net: 63,
      place: "4th Net"
    },
    {
      flight: "A",
      player: "Joe Smith, and Cliff Hodge",
      gross: 75,
      net: 60,
      place: "2nd Net"
    },
    {
      flight: "A",
      player: "Wayne Ploesch, and Mike Treuheit",
      gross: 74,
      net: 60,
      place: "1st Net"
    },
    {
      flight: "A",
      player: "Andy Knapp, and David Bowman",
      gross: 77,
      net: 62,
      place: ""
    }
  ];

  constructor() {}

  ngOnInit() {}

}