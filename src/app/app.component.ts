import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, UrlSegment} from "@angular/router";
import {tap} from "rxjs";
import {RoutePaths} from "./app-routing.module";
import {LocalStorageService} from "./core/services/local-storage.service";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private pathsForButtons = [RoutePaths.AUTHORIZATION, RoutePaths.REGISTRATION].map(p => p.slice(1, p.length))

  constructor(
    private router: Router,
    public auth: AuthService,
  ) {}

  isOnAuthPages() {
    let url = this.router.routerState.snapshot.url;
    if (url) {
      url = url.slice(1, url.length);
    }

    if (url === null) return false;
    console.log(this.pathsForButtons, url, this.pathsForButtons.includes(url));
    return this.pathsForButtons.includes(url);
  }

  public readonly RoutePaths = RoutePaths;
}
