import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component'; 
import { JobComponent } from './job/job.component'; 
import { AccountComponent } from './account/account.component'; 
import { LoginComponent } from './login/login.component'; 
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SignupSupplyComponent } from './signup-supply/signup-supply.component';
import { SignupRequestComponent } from './signup-request/signup-request.component';
import { SignupDeliveryComponent } from './signup-delivery/signup-delivery.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "service", component: ServiceComponent},
  {path: "job", component: JobComponent},
  {path: "account", component: AccountComponent},
  {path: "login", component: LoginComponent},
  {path: "checkoutform", component: CheckoutformComponent}, 
  {path: "blog", component: BlogComponent},
  {path: "pricing", component: PricingComponent},
  {path: 'subscription', component: SubscriptionComponent},
  {path: "livraison", component: LivraisonComponent},
  {path: "signup-supply", component: SignupSupplyComponent},
  {path: "signup-request", component: SignupRequestComponent},
  {path: "signup-delivery", component: SignupDeliveryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
