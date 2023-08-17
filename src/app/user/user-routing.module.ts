import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: 'user-info', component: UserInfoComponent},
  {path: 'user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
