import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationRoutingModule} from './authorization-routing.module';
import {AuthorizationComponent} from './authorization.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
  ]
})
export class AuthorizationModule {
}
