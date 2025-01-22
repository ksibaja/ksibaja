import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'hobbies',
    title: 'Hobbies',
    component: HobbiesComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotFoundComponent
  },
];
