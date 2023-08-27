import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoutePaths} from "./app-routing.module";
import {AuthService} from "./shared/services/auth.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //isOnAuthPages$: Subject<boolean>;
  private pathsForButtons = [RoutePaths.AUTHORIZATION, RoutePaths.REGISTRATION].map(p => p.slice(1, p.length))

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
  ) {
    route.url.subscribe(console.log);
  }

  isOnAuthPages() {
    let url = this.router.routerState.snapshot.url;
    if (url) {
      url = url.slice(1, url.length);
    }

    if (url === null) return false;

    return this.pathsForButtons.includes(url);
  }

  public readonly RoutePaths = RoutePaths;
}
