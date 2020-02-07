import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportComponent } from './import/import.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminloginComponent,
    AdminlandingComponent,
    ImportComponent,
    ManagecompanyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'adminlogin',
         component: AdminloginComponent
      },
      {
        path: 'login',
        component: LoginComponent
     },
     {
      path: '',
      component: HomeComponent
   },
     {
      path: 'home',
      component: HomeComponent
   },
   {
    path: 'signup',
    component: SignupComponent
 },
 {
  path: 'adminlanding',
  component: AdminlandingComponent
},
{
  path: 'import',
  component: ImportComponent
},
{
  path: 'managecompany',
  component: ManagecompanyComponent
}
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
