import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import { AppState } from "../../store/state/app.state";
import { TestAction } from "../../store/reducers/test.action";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  counter: Observable<number>;
  user: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter = this.store.select('counter');
    this.user = this.store.select('user');
  }


  increment(){
		this.store.dispatch({ type: TestAction.INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: TestAction.DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: TestAction.RESET });
	}


}
