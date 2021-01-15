import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component'; 
import { JobComponent } from './job/job.component'; 
import { AccountComponent } from './account/account.component'; 
import { LoginComponent } from './login/login.component'; 
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "home", component: ProductComponent},
  {path: "home", component: ServiceComponent},
  {path: "home", component: JobComponent},
  {path: "account", component: AccountComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
