import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "HomePage",
      link: null,
      icon: "fas fa-home",
      sub_menu: [
          {
            link_name: "Slider Section",
            link: "/home",
          }, 
          {
            link_name: "Team Details",
            link: "/teamdetails",
          },
          {
            link_name: "We Are Here",
            link: "/wearehere",
          },
          {
            link_name: "Synopsis",
            link: "/synopsis",
          },
        ]
    }, 
    {
      link_name:"Contact",
      link:null,
      icon:"fa fa-mobile",
      sub_menu:[
        {
          link_name:"Contact us",
          link:"/contact"
        }
      ]
    },
    // {
    //   link_name: "Technologies",
    //   link: null,
    //   icon: "fa fa-database",
    //   sub_menu: [
    //     {
    //       link_name: "Maps",
    //       link: "/",
    //     }, {
    //       link_name: "Workspace",
    //       link: "/",
    //     }, {
    //       link_name: "Cloud",
    //       link: "/",
    //     }
    //   ]
    // }, 
    // {
    //   link_name: "HERE Technologies",
    //   link: null,
    //   icon: "fa fa-wrench",
    //   sub_menu: [
    //     {
    //       link_name: "Online",
    //       link: "/",
    //     }, {
    //       link_name: "Offline Content",
    //       link: "/",
    //     }, {
    //       link_name: "On-premise",
    //       link: "/",
    //     }
    //   ]
    // }, 
    // {
    //   link_name: "Tom Tom",
    //   link: "/null",
    //   icon: "fa fa-server",
    //   sub_menu: [
    //     {
    //       link_name:'Real Time Traffic Data',
    //       link:'/'
    //     },
    //     {
    //       link_name:'On-premise ',
    //       link:'/'
    //     },
    //   ]
    // },     
    // {
    //   link_name: "Carto",
    //   link: null,
    //   icon: "fa fa-mobile",
    //   sub_menu: [
    //     {
    //       link_name: "Dashboard",
    //       link: "/",
    //     }, {
    //       link_name: "Online",
    //       link: "/",
    //     }, {
    //       link_name: "On-premise ",
    //       link: "/",
    //     },
    //   ]
    // }, 
    // {
    //   link_name: "Thermopylae Sciences & Technologies",
    //   link: null,
    //   icon: "fa fa-address-card",
    //   sub_menu: [
    //     {
    //       link_name: 'Google Earth Enterprise Platform',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'On-premise',
    //       link: '/'
    //     },

    //   ]
    // }, 
    // {
    //   link_name: "Data Providers",
    //   link: null,
    //   icon: "fa fa-address-card",
    //   sub_menu: [
    //     {
    //       link_name: 'Maxar',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'Planet',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'TomTom',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'HERE Technologies',
    //       link: '/'
    //     },        {
    //       link_name: 'Carto',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'Mapbox',
    //       link: '/'
    //     },
    //   ]
    // }, 
    {
      link_name: "Events",
      link: null,
      icon: "fa fa-address-card",
      sub_menu: [
        {
          link_name: 'Upcomming  events',
          link: '/upcomingevents'
        },
        // {
        //   link_name: 'Webinars',
        //   link: '/'
        // },
        {
          link_name: 'Registered Users',
          link: '/list'
        },
      ]
    }, 
    // {
    //   link_name: "Resources",
    //   link: null,
    //   icon: "fa fa-address-card",
    //   sub_menu: [
    //     {
    //       link_name: 'Cesium',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'QGIS',
    //       link: '/'
    //     },
    //     {
    //       link_name: 'Leaflet',
    //       link: '/'
    //     },
    //   ]
    // }, 

    
  ]
  ngOnInit(): void {
 
  }
  isActive = false;

  constructor() {}
  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

}
