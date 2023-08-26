import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {Router} from "@angular/router";
import { RoutePaths } from 'src/app/app-routing.module';
import {AuthService} from "../../shared/services/auth.service";

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
    private auth: AuthService,
  ) {
  }

  goToReg() {
    this.router.navigate([RoutePaths.REGISTRATION])
  }

  login() {
    if (this.authForm.invalid) {
      console.log(this.authForm.errors)
      return;
    }

    const email = this.authForm.controls.email.value;
    const password = this.authForm.controls.password.value;
    if (!email || !password){
     console.log(`email: ${email} password: ${password}`);
     return;
    }

    const registeredAccs = this.ls.get('registered');
    if (!registeredAccs) {
      console.log(`registeredAccs: ${registeredAccs}`)
      return;
    }

    if (!(email in registeredAccs)) {console.log(email);return;}

    const registeredPassword = registeredAccs[email];
    if (registeredPassword !== password) {console.log(registeredPassword, password); return;}

    this.auth.login(email, password, [RoutePaths.POSTS]);
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

  protected readonly c = RoutePaths;
}
