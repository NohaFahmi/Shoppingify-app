import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?:FormGroup;
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    })
  }

  ngOnInit(): void {}

}
