import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/services/request.service';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getHandicaps()
      .subscribe(data => {
        this.members = data['handicaps'];
        this.members_bak = data['handicaps'];
      });
  }
  members = [];
  members_bak = this.members;

  onSearch(event) {
    this.members = this.members_bak.filter(member => member.Name.indexOf(event.target.value) >= 0);
  }
};