import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (Math.random() >= 0.5) {
    router.navigate(['authorization']);
    return false;
  }

  return true;
};
