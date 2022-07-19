import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInputContainerComponent } from './login/login-input-container/login-input-container.component';
import { LogoContainerComponent } from './login/logo-container/logo-container.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginInputContainerComponent,
    LogoContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
