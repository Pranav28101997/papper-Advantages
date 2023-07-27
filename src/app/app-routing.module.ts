import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from '../app/login-page/login-page.component';
import {HomePageComponent} from '../app/home-page/home-page.component';
import {FeedbackFormPageComponent} from '../app/feedback-form-page/feedback-form-page.component';
import { AuthGuard } from 'src/services/auth.guard';


const routes: Routes = [
  {
    path:'',
    component: LoginPageComponent,
   
  },
  {
    path:'login',
    component: LoginPageComponent,
   
  },
  {
    path:'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'feedback-form',
    component: FeedbackFormPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
