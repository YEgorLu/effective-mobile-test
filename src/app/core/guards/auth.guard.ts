import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {RoutePaths} from "../../app-routing.module";
import {AuthService} from "../../shared/services/auth.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.logged) {
    return true;
  }
  const currentUrl = route.url.map(segment => segment.path).join('/');
  router.navigate([RoutePaths.AUTHORIZATION], {queryParams: {redirect: currentUrl}});
  return false;
};
