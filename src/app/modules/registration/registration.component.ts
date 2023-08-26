import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mustMatch} from "../../shared/validators/mustMatch";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {Router} from "@angular/router";
import {RoutePaths} from "../../app-routing.module";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private ls: LocalStorageService,
    private router: Router,
    private auth: AuthService,
    ) {
    this.regForm = fb.group({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.minLength(7), Validators.required]),
        checkPassword: new FormControl('', [Validators.required])
      },
      {
        validators: [mustMatch('password', 'checkPassword')]
      })
  }

  goToAuth() {
    this.router.navigate([RoutePaths.AUTHORIZATION]);
  }

  register() {
    const email: string | null = this.regForm.controls['email'].value;
    const password: string | null = this.regForm.controls['password'].value;
    const checkPassword: string | null = this.regForm.controls['checkPassword'].value;

    if (!email || !password || !checkPassword) return;
    if (password !== checkPassword) return;

    this.auth.register(email, password, [RoutePaths.POSTS]);
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
