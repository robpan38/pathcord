import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
