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
import { GuineaMapComponent } from './guinea-map/guinea-map.component';
import { BurkinaMapComponent } from './burkina-map/burkina-map.component';
import { DrcongoMapComponent } from './drcongo-map/drcongo-map.component';
import { ProductOnlineComponent } from './product-online/product-online.component';
import { ProductClickandcollectComponent } from './product-clickandcollect/product-clickandcollect.component'; 
import { ProductSecondHandComponent } from './product-second-hand/product-second-hand.component'; 
import { ProductNearbyShopComponent } from './product-nearby-shop/product-nearby-shop.component';
import { ServiceOnlineComponent } from './service-online/service-online.component'; 
import { ServiceInpersonComponent } from './service-inperson/service-inperson.component'; 
import { ServiceFreelancingComponent } from './service-freelancing/service-freelancing.component'; 
import { JobProfessionalsComponent } from './job-professionals/job-professionals.component';
import { JobTechniciansComponent } from './job-technicians/job-technicians.component';
import { JobRepairersComponent } from './job-repairers/job-repairers.component';
import { JobPostJobComponent } from './job-post-job/job-post-job.component';

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
  {path: "guinea-map", component: GuineaMapComponent},
  {path: "burkina-map", component: BurkinaMapComponent},
  {path: "drcongo-map", component: DrcongoMapComponent}, 
  {path: "product-online", component: ProductOnlineComponent}, 
  {path: "product-clickandcollect", component: ProductClickandcollectComponent}, 
  {path: "product-second-hand", component: ProductSecondHandComponent},
  {path: "product-nearby-shop", component: ProductNearbyShopComponent},
  {path: "service-online", component: ServiceOnlineComponent},
  {path: "service-inperson", component: ServiceInpersonComponent},
  {path: "service-freelancing", component: ServiceFreelancingComponent},
  {path: "job-professionals", component: JobProfessionalsComponent},
  {path: "job-technicians", component: JobTechniciansComponent},
  {path: "job-repairers", component: JobRepairersComponent},
  {path: "job-post-job", component: JobPostJobComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
