import { Injectable } from '@angular/core';
import {HttpService} from "../http/http.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {IAuthInfo, IUserInfo} from "../../interfaces/auth.interface";
import {BehaviorSubject, from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: BehaviorSubject<IUserInfo | null> = new BehaviorSubject<IUserInfo | null>(null);
  constructor(private httpService: HttpService,
              private authFirebase: AngularFireAuth) {
  }

  emailSignup(signupInfo: IAuthInfo):Observable<any> {
    return from(this.authFirebase.createUserWithEmailAndPassword(signupInfo.email, signupInfo.password));
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

  getUserByUUID(uid: string): Observable<any> {
    return this.httpService.post(`users/getById`, {uid: uid});
  }

  updateUserInDB(userInfo: IUserInfo): Observable<any> {
    return this.httpService.put(`users/update`, userInfo);
  }

  loginWithEmail(loginInfo: IAuthInfo): Observable<any> {
    return from(this.authFirebase.signInWithEmailAndPassword(loginInfo.email, loginInfo.password))
  }

  logoutUser(): Observable<any> {
    return from(this.authFirebase.signOut());
  }

  sendVerificationEmail() {
    return this.authFirebase.currentUser.then((user) =>
      user?.sendEmailVerification());
  }

  getUserRefreshToken(): Observable<any> {
    return new Observable((observer) => {
      this.authFirebase.onAuthStateChanged(user => {
        observer.next(user?.refreshToken);
        this.userInfo.next(user as IUserInfo);
        if (user) {
          console.log("USER", user.refreshToken);
        } else {
          console.log("USER", 'sign out');
        }
      })
    })
  }
}
