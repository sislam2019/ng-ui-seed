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


// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationToastComponent } from './shared-components/notification-toast/notification-toast.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularKendoModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  entryComponents: [NotificationToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
