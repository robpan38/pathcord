import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AppContainerComponent,
} from './chat/app-container/app-container.component';
import {
  ChannelsContainerComponent,
} from './chat/app-container/channels-container/channels-container.component';
import {
  ChatContainerComponent,
} from './chat/app-container/chat-container/chat-container.component';
import {
  UsersContainerComponent,
} from './chat/app-container/users-container/users-container.component';
import { ChatComponent } from './chat/chat.component';
import {
  HeaderContainerComponent,
} from './chat/header-container/header-container.component';
import {
  LoginContainerComponent,
} from './login/login-container/login-container.component';
import {
  LoginInputContainerComponent,
} from './login/login-input-container/login-input-container.component';
import {
  LogoContainerComponent,
} from './login/logo-container/logo-container.component';
import { AddChannelContainerComponent } from './chat/app-container/add-channel-container/add-channel-container.component';

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
    UsersContainerComponent,
    ChannelsContainerComponent,
    AddChannelContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
