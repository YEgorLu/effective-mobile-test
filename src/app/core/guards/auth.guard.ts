import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const ls = inject(LocalStorageService);
  if (isAuthenticated(ls) && isAccRegistered(ls)) {
    return true;
  }

  router.navigate(['authorization']);
  return false;
};

const isAuthenticated = (ls: LocalStorageService): boolean => {
  return !!ls.get('authData');
}

const isAccRegistered = (ls: LocalStorageService) => {
  const acc = ls.get('authData');
  if (!acc) return false;

  const registeredAccs = ls.get('registered');
  if (!registeredAccs) return false;

  if (!(acc.email in registeredAccs)) return false;
  return acc.password === registeredAccs[acc.email];
}
