import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { event } from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit  {
  isLoggedIn: boolean = false;
  currentRouteData: any = {};
  constructor(private authService: AuthService, private route:ActivatedRoute, private router:Router){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      const title = this.route.snapshot.data['title'];
      this.updateHeaderName();
    }
  })
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderName();
      }
    });

    this.isLoggedIn = this.authService.isLoggedIn  }
 
  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }
  private updateHeaderName() {
    const dataCopy = { ...this.route.snapshot.data };
    dataCopy['title'] = this.route.snapshot.data['title'];
    this.currentRouteData = dataCopy;
  }
}
