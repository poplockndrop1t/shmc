import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  profileForm = new FormGroup({
    header: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('ran', this.profileForm.value);
    console.log('valid', this.profileForm.valid);
  }
}
