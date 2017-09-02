import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { MesssageComponent } from './messsage/messsage.component';
import { DataService } from './data.service';
import { Md5 } from "ts-md5/dist/md5";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MesssageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    DataService,
    Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
