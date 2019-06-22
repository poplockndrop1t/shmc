import { Component, OnInit } from '@angular/core';
import { SparkyAndersonData } from 'models/tournamentResults/sparkyAndersonResults';
import { MemberGuestData } from 'models/tournamentResults/memberGuestResults';

@Component({
  selector: 'app-tournament-results',
  templateUrl: './tournament-results.component.html',
  styleUrls: ['./tournament-results.component.css']
})
export class TournamentResultsComponent implements OnInit {
  constructor(
    private sparkyData: SparkyAndersonData,
    private memberGuestData: MemberGuestData
  ) {}
  ngOnInit() {
    // console.log(memberGuestData)
    this.sparkyAnderson2019 = this.sparkyData.sparkyAnderson2019;
    this.memberGuest2019 = this.memberGuestData.memberGuest2019;
  }
  sparkyAnderson2019 = [];
  memberGuest2019 = [];
}