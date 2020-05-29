import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {appRoutes} from "./route";
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SignupClassComponent } from './pages/signup-class/signup-class.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {notificationConfig} from "./models/notification.model";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    NewsComponent,
    ContactComponent,
    GalleryComponent,
    FooterComponent,
    AboutUsComponent,
    ScheduleComponent,
    SignupClassComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule.forRoot( '0bddfbe2-7bf5-46ad-9350-627b8e3f104d'),
    SimpleNotificationsModule.forRoot(notificationConfig)
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
