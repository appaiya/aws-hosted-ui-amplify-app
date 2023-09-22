import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public signIn(): Promise<any> {
    return Auth.federatedSignIn();
  }

  public getCurrentAuthUserDetails(): Observable<any> {
    return from(Auth.currentAuthenticatedUser());
  }
}
