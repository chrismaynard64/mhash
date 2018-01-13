import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import  '../../../lib/twitter.js';
declare var twitterfunc: any;

import { AppState } from "../../store/state/app.state";
import { User } from "../../model/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  public items: any[] = [
    { title: 'Flower', url: 'http://bit.ly/2cJjYuB' },
    { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
    { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }
];
public width: string = "100%";
public height: string = "400px";
public arrows: boolean = true;
user: User;

  constructor(private router: Router, private store: Store<AppState>) {
      router.events.subscribe((val) => {
        //this.getTwitter() ;
      });
   }

  ngOnInit() {
    //this.user = this.store.select(s => s.user)
    this.store.subscribe(s => {
      this.user = s.user;
    });


    this.setImageGallary();
    console.log("profile:Init");

  }


  ngAfterViewInit () {
    this.getTwitter();
    console.log("profile:afterViewInit");
    
  }

  getTwitter() { 
    twitterfunc();
  }
    
    
    
  getTwitterX() {
  !function(d,s,id){
      var js: any,
          fjs=d.getElementsByTagName(s)[0],
          p='https';
      if(!d.getElementById(id)){
          js=d.createElement(s);   
          js.id=id;
          js.src=p+"://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js,fjs);
      }
  }
  (document,"script","twitter-wjs");
 }
 

  setImageGallary(){

    this.galleryOptions = [
      {
          width: '500px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: true,
          imageInfinityMove: true
      }
  ];

  this.galleryImages = [
      {
          small: 'http://bit.ly/2cJjYuB',
          medium: 'http://bit.ly/2cJjYuB',
          big: 'http://bit.ly/2cJjYuB'
      },
      {
          small: 'http://bit.ly/2cTBNaL',
          medium: 'http://bit.ly/2cTBNaL',
          big: 'http://bit.ly/2cTBNaL'
      },
      {
          small: 'http://bit.ly/2cJl3Cx',
          medium: 'http://bit.ly/2cJl3Cx',
          big: 'http://bit.ly/2cJl3Cx'
      },
      {
          small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
          medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
          big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg'
      },
      {
          small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
          medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
          big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg'
      },
      {
          small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
          medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
          big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg'
      }
  ]; 

  }


}
