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

  // onHover() {
  //   let header = this.profileForm.value.header;
  //   let name = this.profileForm.value.name;
  //   let email = this.profileForm.value.email;
  //   let message = this.profileForm.value.message;
  //   console.log(header, name, email, message);
  //   if (header.length > 0 && name.length > 0 && email.length > 0 && message.length > 0) {
  //     this.profileForm.valid = !this.profileForm.valid;
  //   }
  // }

  onSubmit() {
    console.log('ran', this.profileForm.value);
    console.log('valid', this.profileForm.valid);
  }
}
