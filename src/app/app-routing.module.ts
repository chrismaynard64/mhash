import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TestComponent } from "./containers/test/test.component";
import { WelcomeComponent } from "./containers/welcome/welcome.component";
import { NocontentComponent } from "./containers/nocontent/nocontent.component";
import { ProfileComponent } from "./containers/profile/profile.component";
import { AboutComponent } from "./containers/about/about.component";
import { SocialMediaComponent } from "./containers/social-media/social-media.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'social', component: SocialMediaComponent },
  { path: '**', component: NocontentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
