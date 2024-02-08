import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AboutComponent } from './component/about/about.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactComponent } from './component/contact/contact.component';
import { TeamDetailsComponent } from './component/Submenu/team-details/team-details.component';
import { WeAreHereComponent } from './component/Submenu/we-are-here/we-are-here.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpcomingEventsComponent } from './component/events/upcoming-events/upcoming-events.component';
import { ListUpcomingEventComponent } from './component/events/list-upcoming-event/list-upcoming-event.component';
import { SynopsisComponent } from './component/Submenu/synopsis/synopsis.component';

const routes: Routes = [

  // Private routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Homepage' }
  },

  {
    path:'teamdetails',
    component:TeamDetailsComponent,
    data: { title: 'Team Details' }
  },

  // Public routes
  { 
    path: 'login', 
    component: LoginComponent,
    data:{title:'Login'} 

  },
  {
    path:'wearehere',
    component:WeAreHereComponent,
    data:{title:'We are here'}
  },
  {
    path:'synopsis',
    component: SynopsisComponent,
    data:{title:'Synopsis'}
  },
  {
    path:'upcomingevents',
    component:UpcomingEventsComponent,
    data:{title:'Upcomig events'}
  },
  {
    path:'list',
    component:ListUpcomingEventComponent,
    data:{title:'List'}
  },
  {
    path:'contact',
    component:ContactUsComponent,
    data:{title:'Conatct us'}
  }

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path:'about',
  //   component:AboutComponent
  // },
  // {
  //   path:'blogs',
  //   component:BlogsComponent
  // },
  // {
  //   path:'contact',
  //   component:ContactComponent

  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
