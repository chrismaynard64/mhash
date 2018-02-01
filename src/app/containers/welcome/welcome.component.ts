import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [

    trigger('about', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class WelcomeComponent implements OnInit {

  @Output("login") loginEmitter = new EventEmitter<any>();
  @Output("register") registerEmitter = new EventEmitter<any>();

  @ViewChild('bgpicker') picker; 

  showAbout: boolean = false;

  constructor( public auth: AuthService, ) { }

  ngOnInit() {
    this.showAbout = this.auth.isAuthenticated();
  }


  login() {
    //this.loginEmitter.emit();
    this.auth.login();
  }

  register() {
    this.auth.login();
  }

  select() {
  
  }

}
