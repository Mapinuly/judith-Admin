import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule}from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { HeaderComponent } from './component/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AboutComponent } from './component/about/about.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactComponent } from './component/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipInputEvent } from '@angular/material/chips';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogNewComponent } from './component/dialog-new/dialog-new.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditRowDialogComponent } from './component/edit-row-dialog/edit-row-dialog.component';
import { DeleteRowDialogComponent } from './component/delete-row-dialog/delete-row-dialog.component';
import { TeamDetailsComponent } from './component/Submenu/team-details/team-details.component';
import { NewTeamDetailDialogComponent } from './component/TeamDetails/new-team-detail-dialog/new-team-detail-dialog.component';
import { DeleteDetailsDialogComponent } from './component/TeamDetails/new-team-detail-dialog/delete-details-dialog/delete-details-dialog.component';
import { EditDetailDialogComponent } from './component/TeamDetails/new-team-detail-dialog/edit-detail-dialog/edit-detail-dialog.component';
import { WeAreHereComponent } from './component/Submenu/we-are-here/we-are-here.component';
import { NewWeAreHereDialogComponent } from './component/WeAreHereDialog/new-we-are-here-dialog/new-we-are-here-dialog.component';
import { EditWeAreHereDialogComponent } from './component/WeAreHereDialog/edit-we-are-here-dialog/edit-we-are-here-dialog.component';
import { DeleteWeAreHereDialogComponent } from './component/WeAreHereDialog/delete-we-are-here-dialog/delete-we-are-here-dialog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpcomingEventsComponent } from './component/events/upcoming-events/upcoming-events.component';
import { UpcomingEventDialogComponent } from './component/events/upcoming-event-dialog/upcoming-event-dialog.component';
import { EditUpcomingEventsDialogComponent } from './component/events/edit-upcoming-events-dialog/edit-upcoming-events-dialog.component';
import { DeleteUpcomingEventDialogComponent } from './component/events/delete-upcoming-event-dialog/delete-upcoming-event-dialog.component';
import { ListUpcomingEventComponent } from './component/events/list-upcoming-event/list-upcoming-event.component';
import { ViewListDialogComponent } from './component/events/view-list-dialog/view-list-dialog.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteContactDialogComponent } from './contact-us/delete-contact-dialog/delete-contact-dialog.component';
import { SynopsisComponent } from './component/Submenu/synopsis/synopsis.component';
import { EditSynopsisDialogComponent } from './component/Submenu/synopsis/edit-synopsis-dialog/edit-synopsis-dialog.component';
import { SynopsisDeleteDialogComponent } from './component/Submenu/synopsis/synopsis-delete-dialog/synopsis-delete-dialog.component';
import { CreateSynopsisComponent } from './component/Submenu/synopsis/create-synopsis/create-synopsis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    BlogsComponent,
    ContactComponent,
    DialogNewComponent,
    EditRowDialogComponent,
    DeleteRowDialogComponent,
    TeamDetailsComponent,
    NewTeamDetailDialogComponent,
    DeleteDetailsDialogComponent,
    EditDetailDialogComponent,
    WeAreHereComponent,
    NewWeAreHereDialogComponent,
    EditWeAreHereDialogComponent,
    DeleteWeAreHereDialogComponent,
    ContactUsComponent,
    UpcomingEventsComponent,
    UpcomingEventDialogComponent,
    EditUpcomingEventsDialogComponent,
    DeleteUpcomingEventDialogComponent,
    ListUpcomingEventComponent,
    ViewListDialogComponent,
    DeleteContactDialogComponent,
    SynopsisComponent,
    EditSynopsisDialogComponent,
    SynopsisDeleteDialogComponent,
    CreateSynopsisComponent,
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    DatePipe,
    MatChipsModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
