import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoutePaths} from "../../shared/helpers/route-paths";

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
