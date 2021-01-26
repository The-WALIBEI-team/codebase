import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { JobComponent } from './job/job.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { ProductOnlineComponent } from './product-online/product-online.component';
import { ProductClickandcollectComponent } from './product-clickandcollect/product-clickandcollect.component';
import { ProductSecondHandComponent } from './product-second-hand/product-second-hand.component';
import { ProductNearbyShopComponent } from './product-nearby-shop/product-nearby-shop.component';
import { ServiceOnlineComponent } from './service-online/service-online.component';
import { ServiceInpersonComponent } from './service-inperson/service-inperson.component';
import { ServiceWorkrelatedComponent } from './service-workrelated/service-workrelated.component';
import { ServiceFreelancingComponent } from './service-freelancing/service-freelancing.component';
import { JobProfessionalsComponent } from './job-professionals/job-professionals.component';
import { JobTechniciansComponent } from './job-technicians/job-technicians.component';
import { JobRepairersComponent } from './job-repairers/job-repairers.component';
import { JobPostJobComponent } from './job-post-job/job-post-job.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { GeneralConditionsComponent } from './general-conditions/general-conditions.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LivraisonComponent } from './livraison/livraison.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ServiceComponent,
    JobComponent,
    AccountComponent,
    LoginComponent,
    SignupComponent,
    CheckoutformComponent,
    ProductOnlineComponent,
    ProductClickandcollectComponent,
    ProductSecondHandComponent,
    ProductNearbyShopComponent,
    ServiceOnlineComponent,
    ServiceInpersonComponent,
    ServiceWorkrelatedComponent,
    ServiceFreelancingComponent,
    JobProfessionalsComponent,
    JobTechniciansComponent,
    JobRepairersComponent,
    JobPostJobComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogComponent,
    TermsOfUseComponent,
    GeneralConditionsComponent,
    CustomerCareComponent,
    PricingComponent,
    SubscriptionComponent,
    LivraisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
