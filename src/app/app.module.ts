import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DirectivesModule} from "./shared/directives/directives.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HttpClientModule} from "@angular/common/http";
import {MyCustomPaginatorIntl} from "./core/internatialization/paginator";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DirectivesModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
