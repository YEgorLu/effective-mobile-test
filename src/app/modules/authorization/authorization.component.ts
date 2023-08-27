import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {Router} from "@angular/router";
import {RoutePaths} from 'src/app/app-routing.module';
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private snackBar: MatSnackBar,
    private auth: AuthService,
  ) {
  }

  login() {
    if (this.authForm.invalid) {
      console.log(this.authForm.errors)
      return;
    }

    const email = this.authForm.controls.email.value;
    const password = this.authForm.controls.password.value;
    if (!email || !password) {
      return;
    }

    if (!this.auth.isRegistered(email, password)) {
      this.snackBar.open('Email или пароль неправильные', undefined,
        {duration: 200000, panelClass: 'snack'});
      return;
    }

    this.auth.login(email, password, [RoutePaths.POSTS]);
  }

  protected readonly c = RoutePaths;
}
