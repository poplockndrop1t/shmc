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
    this.sparkyAnderson2019 = this.sparkyData.sparkyAnderson2019;
    this.memberGuest2019 = this.memberGuestData.memberGuest2019;
  }
  sparkyAnderson2019 = [];
  memberGuest2019 = [];
  toggleShown = {
    'Member Guest 2019': true,
    'Sparky Anderson 2019': false
  }


  handleClick(e) {
    if (this.toggleShown[e.target.innerText]) {
      this.toggleShown[e.target.innerText] = false
    } else {
      this.toggleShown[e.target.innerText] = true;
    }
  }
}