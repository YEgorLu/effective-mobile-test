import {Injectable} from '@angular/core';
import {LocalStorageService} from "../../core/services/local-storage.service";
import {RoutePaths} from "../../app-routing.module";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;

  constructor(
    private ls: LocalStorageService,
    private router: Router,
  ) {
    const lastLoggedAcc = this.ls.get('authData');
    if (lastLoggedAcc) {
      const registeredAccs = this.ls.get('registered');
      const loggedWithCorrectData = registeredAccs
        && lastLoggedAcc.email in registeredAccs
        && lastLoggedAcc.password === registeredAccs[lastLoggedAcc.email];
      if (loggedWithCorrectData) {
        this.logged = true;
        this.router.navigate([RoutePaths.POSTS]);
      }
    }
  }

  login(email: string, password: string, redirect?: string[]) {
    this.ls.set('authData', {email, password});
    this.logged = true;
    if (redirect)
      this.router.navigate(redirect);
  }

  logout(redirect: string[] = [RoutePaths.AUTHORIZATION]) {
    this.ls.set('authData', null)
    this.logged = false;
    this.router.navigate(redirect);
  }

  register(email: string, password: string, redirect?: string[]): Error | void {
    let registeredAccs = this.ls.get('registered');
    if (registeredAccs && email in registeredAccs) return new Error('Email уже используется');

    if (!registeredAccs) {
      registeredAccs = {};
    }
    registeredAccs[email] = password;
    this.ls.set('registered', registeredAccs);
    if (redirect)
      this.router.navigate(redirect);
  }

  isRegistered(email: string, password: string): boolean {
    const registeredAccs = this.ls.get('registered');
    if (!registeredAccs)
      return false;


    if (!(email in registeredAccs))
      return false;

    const registeredPassword = registeredAccs[email];
    return registeredPassword === password;
  }
}
