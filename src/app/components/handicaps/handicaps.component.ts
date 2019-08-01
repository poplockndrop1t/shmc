import { Component, OnInit } from '@angular/core';
import { Handicaps } from 'models/handicaps/handicaps_8_1_2019';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  constructor(private handicaps: Handicaps) {}
  ngOnInit() {
    this.members = this.handicaps.handicaps;
    this.members_bak = this.handicaps.handicaps;
  }
  members = [];
  members_bak = this.members;

  onSearch(event) {
    this.members = this.members_bak.filter(member => member.Name.indexOf(event.target.value) >= 0);
  }
}