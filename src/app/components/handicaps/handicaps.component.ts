import { Component, OnInit } from '@angular/core';
import { Handicaps } from 'models/handicaps/handicaps_7_15_2019';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  constructor(private handicaps: Handicaps) {}
  ngOnInit() {
    this.members = this.handicaps.handicaps;
  }
  members = [];
}