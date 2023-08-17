import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
  {path: 'admin-info', component: AdminInfoComponent},
  {path: 'admin-login', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
