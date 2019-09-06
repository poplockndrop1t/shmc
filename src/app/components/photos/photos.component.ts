import { Component, OnInit } from '@angular/core';
import { Member_Guest_Photos } from 'models/photos/photos_member_guest_2019';
import { Member_Member_Photos } from 'models/photos/photos_member_member_2019';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  constructor(
    private member_guest_photos: Member_Guest_Photos,
    private member_member_photos: Member_Member_Photos) {}

  ngOnInit() {
    this.member_guest = this.member_guest_photos.photos;
    this.member_member = this.member_member_photos.photos;
  }
  member_guest = [];

}