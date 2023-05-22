import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {IUserInfo} from "../../../../shared/interfaces/auth.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
  private passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{8,20}$';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.passwordPattern)])),
    })
  }

  ngOnInit(): void {
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

  onLogin() {
    this.authService.loginWithEmail({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).pipe(first()).subscribe({
        next: (result) => {
          this.authService.getUserByUUID(result.user?.uid as string).pipe(first()).subscribe(
            {
              next: (user) => {
                this.authService.userInfo.next(result.user as IUserInfo);
                this.router.navigate(['/'])
              },
              error: (error) => {
                window.alert(error.message)
              },
              complete: () => {
              }
              }
          )
        },
        error: (error) => {
          window.alert(error.message)
        },
        complete: () => {
        }
      }
    )
  }

}
