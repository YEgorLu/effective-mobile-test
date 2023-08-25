import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, UrlSegment} from "@angular/router";
import {tap} from "rxjs";
import {RoutePaths} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private router: Router,
  ) {}

  needShowHeader() {
    let url = this.router.routerState.snapshot.url;
    if (url) {
      url = url.slice(1, url.length);
    }
    console.log(url);
    if (url === null) return false;
    return ![RoutePaths.AUTHORIZATION, RoutePaths.REGISTRATION].includes(url[url.length-1]);
  }
}
