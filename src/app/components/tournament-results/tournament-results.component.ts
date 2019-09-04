import { Component, OnInit } from '@angular/core';
import { SparkyAndersonData } from 'models/tournamentResults/sparkyAndersonResults';
import { MemberGuestData } from 'models/tournamentResults/memberGuestResults';
import { ClubChampionshipData } from 'models/tournamentResults/clubChampionshipResults';
import { MemberMemberData } from 'models/tournamentResults/memberMemberResults';

@Component({
  selector: 'app-tournament-results',
  templateUrl: './tournament-results.component.html',
  styleUrls: ['./tournament-results.component.css']
})
export class TournamentResultsComponent implements OnInit {
  constructor(
    private memberMemberData: MemberMemberData,
    private clubChampionshipData: ClubChampionshipData,
    private sparkyData: SparkyAndersonData,
    private memberGuestData: MemberGuestData
  ) {}
  ngOnInit() {
    this.memberMember2019 = this.memberMemberData.memberMember2019;
    this.clubChampionship2019 = this.clubChampionshipData.clubChampionship2019;
    this.sparkyAnderson2019 = this.sparkyData.sparkyAnderson2019;
    this.memberGuest2019 = this.memberGuestData.memberGuest2019;
  }

  memberMember2019 = [];
  clubChampionship2019 = [];
  sparkyAnderson2019 = [];
  memberGuest2019 = [];

  toggleShown = {
    'Member Member 2019': true,
    'Club Championship 2019': false,
    'Member Guest 2019': false,
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