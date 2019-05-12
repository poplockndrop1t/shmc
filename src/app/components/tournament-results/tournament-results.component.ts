import { Component, OnInit } from '@angular/core';
import { SparkyAndersonData } from 'models/tournamentResults/sparkyAndersonResults';

@Component({
  selector: 'app-tournament-results',
  templateUrl: './tournament-results.component.html',
  styleUrls: ['./tournament-results.component.css']
})
export class TournamentResultsComponent implements OnInit {
  constructor(private sparkyData: SparkyAndersonData) {}
  ngOnInit() {
    this.sparkyAnderson2019 = this.sparkyData.sparkyAnderson2019;
  }
  sparkyAnderson2019 = [];
}