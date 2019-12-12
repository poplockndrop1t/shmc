import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  profileForm = new FormGroup({
    header: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('ran', this.profileForm.value);
  }
}
