import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminInfoComponent } from './admin/components/admin-info/admin-info.component';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
import { UserInfoComponent } from './user/components/user-info/user-info.component';
import { UserLoginComponent } from './user/components/user-login/user-login.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)},
  {path: 'user', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


