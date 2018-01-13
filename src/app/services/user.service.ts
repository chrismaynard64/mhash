import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { User } from "../model/user";

@Injectable()
export class UserService {

  constructor(private http: Http) { }


  getUsers() : Observable<User[]> {
    return this.http.get("./data/users.json")
      .map(response => <User[]>response.json())
  }


}
