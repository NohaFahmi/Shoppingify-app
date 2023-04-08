import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm:FormGroup;
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
  private passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{8,20}$';
  constructor(private formBuilder:FormBuilder) {
    this.signupForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.passwordPattern)])),
      passwordConfirm: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.passwordPattern)])),
    })
  }

  getFormValidationErrors(fieldControl: AbstractControl | null): number {
    if (fieldControl?.touched) {
      if (fieldControl?.errors) {
        if (fieldControl?.errors['required']) {
          return 1;
        }
        if (fieldControl?.errors['pattern'].requiredPattern == this.emailPattern) {
          return 2;
        }
        if (fieldControl?.errors['pattern'].requiredPattern == this.passwordPattern) {
          return 3;
        }
      }
    }
    return 0;
  }
  onSignup() {
    //TODO: implement signup logic
  }
}
