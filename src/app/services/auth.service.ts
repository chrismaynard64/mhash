import { UserSetAction } from './../store/reducers/user.action';
import { AppState } from './../store/state/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

import * as auth0 from "auth0-js";

@Injectable()
export class AuthService {

    webAuth: any = new auth0.WebAuth({
        domain: 'mhash.eu.auth0.com',
        clientID: 'C2szrnWsROqq3cyojkCZHksItdrQwN9G',
        responseType: 'token id_token',
        audience: 'https://mhash.eu.auth0.com/userinfo',
        scope: 'openid profile',
     /*   redirectUri: window.location.href, */
     redirectUri: 'http://localhost:4200'
    });

    userProfile: any;

    constructor(public router: Router, private store: Store<AppState>, ) {}


    public login(): void {
        this.webAuth.authorize();
    }

    public handleAuthentication(): void {
        this.webAuth.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);
            this.router.navigate(['/home']);
          } else if (err) {
            this.router.navigate(['/home']);
            console.log(err);
          }
        });
      }
    
      private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
      }
    
      public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.store.dispatch(new UserSetAction(null));
        // Go back to the home route
        this.router.navigate(['/']);
      }
    
      public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }
    
      public getProfile(cb): void {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('Access token must exist to fetch profile');
        }
      
        const self = this;
        this.webAuth.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
            self.userProfile = profile;
            this.store.dispatch(new UserSetAction({ id: 1, name: profile.nickname, email:profile.name, imaqgeUrl: '', connections: [], gallery: []}));
          }
          cb(err, profile);
        });
      }
}
