import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RoutePaths} from 'src/app/app-routing.module';
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnDestroy {
  authForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(7), Validators.required]),
  });
  private redirectUrl: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(queryParams => this.redirectUrl = queryParams.get('redirect'))
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  login() {
    if (this.authForm.invalid) {
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

    this.auth.login(email, password, [this.redirectUrl || RoutePaths.POSTS]);
  }
}
