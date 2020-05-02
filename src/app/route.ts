import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {NewsComponent} from "./pages/news/news.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ScheduleComponent} from "./pages/schedule/schedule.component";
import {SignupClassComponent} from "./pages/signup-class/signup-class.component";


export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'class',
    component: SignupClassComponent
  }
];
