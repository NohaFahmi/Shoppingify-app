import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthorizationActions, AuthorizationSelectors, AuthState} from "../../../../store/authorization";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isUserLoggedIn$: Observable<boolean> = of(false);
  loginErrors$: Observable<string | null> = of(null);
  isLoading$: Observable<boolean> = of(false);
  isLoading: boolean = false;
  private destroy$: Subject<void> = new Subject();
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
  private passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{8,20}$';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private store: Store<AuthState>, private messageService: MessageService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.passwordPattern)])),
    })
  }

  ngOnInit(): void {
    this.loginErrors$ = this.store.select(AuthorizationSelectors.selectErrors);
    this.isLoading$ = this.store.select(AuthorizationSelectors.selectIsLoading);
    this.isUserLoggedIn$ = this.store.select(AuthorizationSelectors.selectIsLoggedIn);
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
    this.isLoading$.pipe(takeUntil(this.destroy$)).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.store.dispatch(AuthorizationActions.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }));
    this.isUserLoggedIn$.pipe(takeUntil(this.destroy$)).subscribe((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        this.router.navigate(['/app/items']);
      }
    });
    this.loginErrors$.pipe(takeUntil(this.destroy$)).subscribe((loginErrors) => {
      if (loginErrors) {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid email or password'});
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
