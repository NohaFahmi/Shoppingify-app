import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {map, tap} from "rxjs";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuth().pipe(
    map((user) => {
      if (user !== null) {
        return true;
      } else {
        return false;
      }
    }),
    tap((res) => {
      if (res) {
        return true;
      } else {
        router.navigate(['/auth/login']);
        return false;
      }
    })
  )
};
