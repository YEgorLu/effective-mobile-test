import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RoutePaths} from "./app-routing.module";
import {AuthService} from "./shared/services/auth.service";

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
    public auth: AuthService,
  ) {}

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
