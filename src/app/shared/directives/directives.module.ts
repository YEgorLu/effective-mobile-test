import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgLetDirective} from "./ng-let.directive";



@NgModule({
  declarations: [
    NgLetDirective
  ],
  exports: [
    NgLetDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
