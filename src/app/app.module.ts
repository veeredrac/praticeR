import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KkkComponent } from './kkk/kkk.component';
import { KkjhgfdfghComponent } from './kkjhgfdfgh/kkjhgfdfgh.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { L1Component } from './l1/l1.component';

@NgModule({
  declarations: [
    AppComponent,
    KkkComponent,
    KkjhgfdfghComponent,
    OtpComponent,
    L1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
