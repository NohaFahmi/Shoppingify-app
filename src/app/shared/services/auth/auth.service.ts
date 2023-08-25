import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {IAuthInfo, IUserInfo} from "../../interfaces/auth.interface";
import {from, Observable, of} from "rxjs";
import {AuthorizationActions, AuthState} from "../../../store/authorization";
import {Store} from "@ngrx/store";
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService,
              private auth: Auth, private store: Store<AuthState>) {
  }

  emailSignup(signupInfo: IAuthInfo): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, signupInfo.email, signupInfo.password));
  }

  createUserInDB(userInfo: IUserInfo): Observable<any> {
    return this.httpService.post('users/create', {
      uid: userInfo.uid,
      email: userInfo.email,
      username: userInfo.displayName,
      photoURL: userInfo.photoURL,
      emailVerified: userInfo.emailVerified
    });
  }

  getUserByUUID(user: IUserInfo): Observable<any> {
    return this.httpService.get(`users/getById/${user.uid}`);
  }

  updateUserInDB(userInfo: IUserInfo): Observable<any> {
    return this.httpService.put(`users/update`, userInfo);
  }

  loginWithEmail(loginInfo: IAuthInfo): Observable<any> {
    return of(signInWithEmailAndPassword(this.auth, loginInfo.email, loginInfo.password))
  }

  logoutUser(): Observable<any> {
    return of(signOut(this.auth));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // sendVerificationEmail() {
  //   return this.auth.currentUser.then((user) =>
  //     user?.sendEmailVerification());
  // }
  setUserInfo(user: IUserInfo | null) {
    console.log("SEEET", user);
  }

  getUserRefreshToken(): Observable<any> {
    return new Observable((observer) => {
      // onAuthStateChanged(this.auth,user => {
      //   // this.userInfo.next(user as IUserInfo);
      //   observer.next(user);
      //   if (user) {
      //     this.store.dispatch(AuthorizationActions.setUserInfo({ userInfo: user as IUserInfo }));
      //     console.log("USER", user.refreshToken);
      //   } else {
      //     this.store.dispatch(AuthorizationActions.logout());
      //     console.log("USER", 'sign out');
      //   }
      // })
    })
  }
}
