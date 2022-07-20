import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInputContainerComponent } from './login/login-input-container/login-input-container.component';
import { LogoContainerComponent } from './login/logo-container/logo-container.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { AppContainerComponent } from './chat/app-container/app-container.component';
import { HeaderContainerComponent } from './chat/header-container/header-container.component';
import { ChatContainerComponent } from './chat/app-container/chat-container/chat-container.component';
import { UsersContainerComponent } from './chat/app-container/users-container/users-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginInputContainerComponent,
    LogoContainerComponent,
    LoginContainerComponent,
    ChatComponent,
    AppContainerComponent,
    HeaderContainerComponent,
    ChatContainerComponent,
    UsersContainerComponent
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
