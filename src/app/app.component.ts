import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import { UserSetAction, UsersSetAction } from './store/reducers/user.action';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from "./store/state/app.state";
import { User, UserDefault } from './model/user';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;
  userDefault = UserDefault;
  show = false;

  constructor(private store: Store<AppState>, public auth: AuthService, private userService: UserService)  {
    

      this.store.subscribe(s => {
        this.user = s.user;
      });
  }

  ngOnInit()  {
    this.auth.handleAuthentication();
 
    if (this.auth.isAuthenticated()) {
      this.auth.getProfile((err, profile) => {
        if (profile)
          this.store.dispatch(new UserSetAction({ id: 1, name: profile.nickname, email:profile.name, imaqgeUrl: '', gallery:[], connections:[]  }));
      })

      this.userService.getUsers().subscribe(users => {
          if (users) {
            this.store.dispatch(new UsersSetAction(users));
          }
      })


    }
    
  }

  getUser() : Observable<User>  {
    return this.store.select('user');
  }

}
