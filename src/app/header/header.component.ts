import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public toolbarButtons = [
    {
      text: 'Home',
      route: '',
    },
    {
      text: 'About us',
      route: 'about',
    },
    {
      text: 'Contact',
      route: 'contact',
    },
  ];

  public selectedRoute:any;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.selectedRoute = ((event as NavigationEnd).url)?.substring(1);
      console.log(this.selectedRoute);
    });
  }

  public navigateTo(route:string):void {
    this.router.navigate([
      route,
    ]);
  }
}
