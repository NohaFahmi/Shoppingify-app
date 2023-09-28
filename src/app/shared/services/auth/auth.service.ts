import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {IAuthInfo, IUserInfo} from "../../interfaces/auth.interface";
import {lastValueFrom, Observable, tap} from "rxjs";
import {AuthState} from "../../../store/authorization";
import {Store} from "@ngrx/store";
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  authState,
  deleteUser,
  User
} from '@angular/fire/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | null = null;

  constructor(private httpService: HttpService,
              private auth: Auth, private store: Store<AuthState>, private firebaseAuth: AngularFireAuth) {
  }

  checkAuth(): Observable<any> {
    return authState(this.auth).pipe(
      tap((user) => {
        this.user = user;
      }),
    )
  }

  async deleteUserFromFirebaseAuth(user: User): Promise<any> {
    return deleteUser(user);
  }

  signupWithEmail(userInfo: IUserInfo): Observable<{ user: any }> {
    return this.httpService.post('users/signup', {
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      password: userInfo.password,
    });
  }

  getUserByUUID(user: IUserInfo): Promise<any> {
    return lastValueFrom(this.httpService.get(`users/getById/${user.uid}`));
  }

  updateUserInDB(userInfo: IUserInfo): Promise<any> {
    return lastValueFrom(this.httpService.put(`users/update`, userInfo));
  }

  loginWithEmail(loginInfo: IAuthInfo): Promise<any> {
    return signInWithEmailAndPassword(this.auth, loginInfo.email, loginInfo.password);
  }

  logoutUser(): Promise<any> {
    return signOut(this.auth);
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

  setUserRefreshToken() {
    authState(this.auth).subscribe((user) => {
      sessionStorage.setItem('refreshToken', user?.refreshToken || '');
    });
  }
}
