import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {DirectivesModule} from "../../shared/directives/directives.module";
import {MyCustomPaginatorIntl} from "../../core/internatialization/paginator";


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PipesModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DirectivesModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class PostsModule { }
