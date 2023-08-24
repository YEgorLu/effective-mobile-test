import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoutePaths} from "../../shared/helpers/route-paths";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  authForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(7), Validators.required]),
  });

  constructor(
    private ls: LocalStorageService,
    private router: Router,
  ) {
  }

  login() {
    if (this.authForm.invalid) return;

    const email = this.authForm.controls.email.value;
    const password = this.authForm.controls.email.value;
    if (!email || !password) return;

    const registeredAccs = this.ls.get('registered');
    if (!registeredAccs) return;

    if (!(email in registeredAccs)) return;

    const registeredPassword = registeredAccs[email];
    if (registeredPassword !== password) return;

    this.ls.set('authData', {email, password});
    this.router.navigate([RoutePaths.POSTS]);
  }

  getEmailError() {
    const emailControl = this.authForm.controls.email;

    if (emailControl.hasError('email')) {
      return 'Неправильный формат email';
    }

    if (emailControl.hasError('required')) {
      return 'Пустой email';
    }

    return '';
  }

  getPasswordError() {
    const passwordControl = this.authForm.controls.password;

    if (passwordControl.hasError('minLength')) {
      return 'Длина пароля должна быть не менее 7 символов';
    }

    if (passwordControl.hasError('required')) {
      return 'Пустой пароль';
    }

    return '';
  }

  protected readonly RoutePaths = RoutePaths;
}
