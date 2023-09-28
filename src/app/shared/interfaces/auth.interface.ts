export interface IAuthInfo {
  email: string;
  password: string;
}

export interface IUserInfo {
  uid?: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  emailVerified?: boolean;
  refreshToken?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  password?: string;
  _id?: string;
}

