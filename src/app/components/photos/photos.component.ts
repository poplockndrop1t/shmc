import { Component, OnInit } from '@angular/core';
import { Member_Guest_Photos } from 'models/photos/photos_member_guest_2019';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  constructor(private member_guest_photos: Member_Guest_Photos) {
  }
  ngOnInit() {
    this.member_guest = this.member_guest_photos.photos;
    // console.log('here', this.member_guest_photos.photos);
  }
  member_guest = [];

}