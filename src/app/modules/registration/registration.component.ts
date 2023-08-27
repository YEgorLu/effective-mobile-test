import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mustMatch} from "../../shared/validators/mustMatch";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {Router} from "@angular/router";
import {RoutePaths} from "../../app-routing.module";
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regForm: FormGroup<{email: AbstractControl, password: AbstractControl, checkPassword: AbstractControl}>;

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    ) {
    this.regForm = fb.group<{email: AbstractControl, password: AbstractControl, checkPassword: AbstractControl}>({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.minLength(7), Validators.required]),
        checkPassword: new FormControl('', [Validators.required])
      },
      {
        validators: [mustMatch(['password', 'checkPassword'], ['checkPassword'])],
        updateOn: 'blur',
      })
  }

  register() {
    const email: string | null = this.regForm.controls['email'].value;
    const password: string | null = this.regForm.controls['password'].value;
    const checkPassword: string | null = this.regForm.controls['checkPassword'].value;

    if (!email || !password || !checkPassword) return;
    if (password !== checkPassword) return;

    const err = this.auth.register(email, password, [RoutePaths.POSTS])
    if (err) {this.snackBar.open(err.message, undefined, {duration: 2000})};
  }

  public readonly RoutePaths = RoutePaths;
}
