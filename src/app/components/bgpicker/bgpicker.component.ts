import { Component, OnInit, Renderer2 } from '@angular/core';


import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-bgpicker',
  templateUrl: './bgpicker.component.html',
  styleUrls: ['./bgpicker.component.css']
})
export class BgpickerComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  public items: any[] = [
    { title: 'Flower', url: 'http://bit.ly/2cJjYuB' },
    { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
    { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }
];

  constructor(private renderer: Renderer2) { 
    //this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnInit() {
    this.setImageGallary();
  }


   pickerChange(evt) {
      let p = evt.image.big;

      this.renderer.setStyle(document.body, 'background', 'linear-gradient(rgba(255, 255, 255, 0.7), 	 rgba(255, 255, 255, 0.7)), url("' + evt.image.big +'")');
   }

  setImageGallary(){

    this.galleryOptions = [
      {
          width: '500px',
          height: '80px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          image: false,
          preview: false, 
          imageInfinityMove: true,
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20,
       },
      // max-width 400
      {
          breakpoint: 400,
          preview: false,

      }
  ];

  this.galleryImages = [
    {
      small: 'assets/images/backgrounds/background-3075643_1920.jpg',
      medium: 'assets/images/backgrounds/background-3075643_1920.jpg',
      big: 'assets/images/backgrounds/background-3075643_1920.jpg'
    },
    {
      small: 'assets/images/backgrounds/ballerina-3055155_1920.jpg',
      medium: 'assets/images/backgrounds/ballerina-3055155_1920.jpg',
      big: 'assets/images/backgrounds/ballerina-3055155_1920.jpg'
    },
    {
      small: 'assets/images/backgrounds/chess-2730034_1920.jpg',
      medium: 'assets/images/backgrounds/chess-2730034_1920.jpg',
      big: 'assets/images/backgrounds/chess-2730034_1920.jpg'
    },
    {
      small: 'assets/images/backgrounds/panel-3075912_1920.jpg',
      medium: 'assets/images/backgrounds/panel-3075912_1920.jpg',
      big: 'assets/images/backgrounds/panel-3075912_1920.jpg'
    },
    {
      small: 'assets/images/backgrounds/flower-3073717_1920.jpg',
      medium: 'assets/images/backgrounds/flower-3073717_1920.jpg',
      big: 'assets/images/backgrounds/flower-3073717_1920.jpg'
    }
]; 

  }


}
