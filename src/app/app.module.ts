import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './containers/about/about.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProfilComponent } from './containers/profil/profil.component';
import { ContactComponent } from './containers/contact/contact.component';
import { EventsComponent } from './containers/events/events.component';
import { ReviewsComponent } from './containers/reviews/reviews.component';
import { SocialMediaComponent } from './containers/social-media/social-media.component';
import { ShopComponent } from './containers/shop/shop.component';
import { TestComponent } from './containers/test/test.component';
import { NocontentComponent } from './containers/nocontent/nocontent.component';

import { testReducer } from "./store/reducers/test.reducer";
import { userReducer } from "./store/reducers/user.reducer";
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

import { AuthService } from './services/auth.service';
import { AuthcallbackComponent } from './containers/authcallback/authcallback.component';
import { UserService } from "./services/user.service";
import { HttpModule } from "@angular/http";
import { BgpickerComponent } from './components/bgpicker/bgpicker.component';
import { ProfileEditComponent } from './containers/profile-edit/profile-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    ProfileComponent,
    ProfilComponent,
    ContactComponent,
    EventsComponent,
    ReviewsComponent,
    SocialMediaComponent,
    ShopComponent,
    TestComponent,
    NocontentComponent,
    SidemenuComponent,
    AuthcallbackComponent,
    BgpickerComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, LayoutModule, ScrollViewModule, HttpModule,
    NgxGalleryModule,
    StoreModule.forRoot({ counter: testReducer, user: userReducer })
  ],
  providers: [ AuthService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  