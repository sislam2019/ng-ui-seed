import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// 3rd party module
import { AngularMaterialModule } from './angular-material.module';
import { AngularKendoModule } from './angular-kendo.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Components
import { AppComponent } from './app.component';
import { UploadModule } from '@progress/kendo-angular-upload';










@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularKendoModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    UploadModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
