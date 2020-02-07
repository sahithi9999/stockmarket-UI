import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportComponent } from './import/import.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';




const routes: Routes = [
{path:"signup",component:SignupComponent},
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"adminlogin",component:AdminloginComponent},
{path:"login",component:LoginComponent},
{path:"adminlanding",component:AdminlandingComponent},
{path:"import",component:ImportComponent},
{path:"managecompany",component:ManagecompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
