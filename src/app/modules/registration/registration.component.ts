import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mustMatch} from "../../shared/validators/mustMatch";
import {RoutePaths} from "../../shared/helpers/route-paths";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.regForm = fb.group({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.minLength(7), Validators.required]),
        checkPassword: new FormControl('', [Validators.required])
      },
      {
        validators: [mustMatch('password', 'checkPassword')]
      })
  }

  getEmailError() {
    const emailControl = this.regForm.controls['email'];

    if (emailControl.hasError('email')) {
      return 'Неправильный формат email';
    }

    if (emailControl.hasError('required')) {
      return 'Пустой email';
    }

    return '';
  }

  getPasswordError() {
    const passwordControl = this.regForm.controls['password'];

    if (passwordControl.hasError('minLength')) {
      return 'Длина пароля должна быть не менее 7 символов';
    }

    if (passwordControl.hasError('required')) {
      return 'Пустой пароль';
    }

    return '';
  }

  getPasswordCheckError() {
    if (this.regForm.hasError('mustMatch')) {
      return 'Пароли не совпадают'
    }

    return '';
  }

  protected readonly RoutePaths = RoutePaths;
}
