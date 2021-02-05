import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {
    path:"home",component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"AddEmployee",component:AddEmployeeComponent,canActivate:[AuthGuard]
  },
 
  {
    path:'',redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"**",component:PageNotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const componentImport=[HomeComponent,
  AddEmployeeComponent,
  UpdateEmployeeComponent,
  PageNotFoundComponent,LoginComponent];
