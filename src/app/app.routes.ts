import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MesssageComponent } from './messsage/messsage.component';

export const ROUTES: Routes = [
  {path:'',redirectTo:'/message', pathMatch:'full'},
  { path: 'message', component:MesssageComponent},
  { path: 'HOME', component: HomeComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
