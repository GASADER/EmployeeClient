import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard-component/employee-dashboard-component.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: EmployeeDashboardComponent},
  {path:'detail',component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
