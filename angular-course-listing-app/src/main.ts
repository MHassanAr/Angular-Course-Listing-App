import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';
import { CoursesComponent } from './app/pages/courses/courses.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { LoginComponent } from './app/pages/login/login.component';
import { AdminComponent } from './app/pages/admin/admin.component';
import { authGuard } from './app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
