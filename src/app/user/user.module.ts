import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserLoginComponent } from './components/user-login/user-login.component';


@NgModule({
  declarations: [
    UserInfoComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
