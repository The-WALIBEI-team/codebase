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
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { GeneralConditionsComponent } from './general-conditions/general-conditions.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SignupSupplyComponent } from './signup-supply/signup-supply.component';
import { SignupRequestComponent } from './signup-request/signup-request.component';
import { SignupDeliveryComponent } from './signup-delivery/signup-delivery.component';
import { GuineaMapComponent } from './guinea-map/guinea-map.component';
import { BurkinaMapComponent } from './burkina-map/burkina-map.component';
import { DrcongoMapComponent } from './drcongo-map/drcongo-map.component';
import { GuineaRegionConakryComponent } from './guinea-region-conakry/guinea-region-conakry.component';
import { GuineaRegionKindiaComponent } from './guinea-region-kindia/guinea-region-kindia.component';
import { GuineaRegionBokeComponent } from './guinea-region-boke/guinea-region-boke.component';
import { GuineaRegionLabeComponent } from './guinea-region-labe/guinea-region-labe.component';
import { GuineaRegionMamouComponent } from './guinea-region-mamou/guinea-region-mamou.component';
import { GuineaRegionFaranahComponent } from './guinea-region-faranah/guinea-region-faranah.component';
import { GuineaRegionKankanComponent } from './guinea-region-kankan/guinea-region-kankan.component';
import { GuineaRegionNzerekoreComponent } from './guinea-region-nzerekore/guinea-region-nzerekore.component';
import { GuineaVilleConakryComponent } from './guinea-ville-conakry/guinea-ville-conakry.component';
import { GuineaVilleBeylaComponent } from './guinea-ville-beyla/guinea-ville-beyla.component';
import { GuineaVilleBoffaComponent } from './guinea-ville-boffa/guinea-ville-boffa.component';
import { GuineaVilleBokeComponent } from './guinea-ville-boke/guinea-ville-boke.component';
import { GuineaVilleCoyahComponent } from './guinea-ville-coyah/guinea-ville-coyah.component';
import { GuineaVilleDabolaComponent } from './guinea-ville-dabola/guinea-ville-dabola.component';
import { GuineaVilleDalabaComponent } from './guinea-ville-dalaba/guinea-ville-dalaba.component';
import { GuineaVilleDinguirayeComponent } from './guinea-ville-dinguiraye/guinea-ville-dinguiraye.component';
import { GuineaVilleDubrekaComponent } from './guinea-ville-dubreka/guinea-ville-dubreka.component';
import { GuineaVilleFaranahComponent } from './guinea-ville-faranah/guinea-ville-faranah.component';
import { GuineaVilleForecariahComponent } from './guinea-ville-forecariah/guinea-ville-forecariah.component';
import { GuineaVilleFriaComponent } from './guinea-ville-fria/guinea-ville-fria.component';
import { GuineaVilleGaoualComponent } from './guinea-ville-gaoual/guinea-ville-gaoual.component';
import { GuineaVilleGueckedouComponent } from './guinea-ville-gueckedou/guinea-ville-gueckedou.component';
import { GuineaVilleKamsarComponent } from './guinea-ville-kamsar/guinea-ville-kamsar.component';
import { GuineaVilleKankanComponent } from './guinea-ville-kankan/guinea-ville-kankan.component';
import { GuineaVilleKerouaneComponent } from './guinea-ville-kerouane/guinea-ville-kerouane.component';
import { GuineaVilleKindiaComponent } from './guinea-ville-kindia/guinea-ville-kindia.component';
import { GuineaVilleKissidougouComponent } from './guinea-ville-kissidougou/guinea-ville-kissidougou.component';
import { GuineaVilleKoubiaComponent } from './guinea-ville-koubia/guinea-ville-koubia.component';
import { GuineaVilleKouroussaComponent } from './guinea-ville-kouroussa/guinea-ville-kouroussa.component';
import { GuineaVilleLabeComponent } from './guinea-ville-labe/guinea-ville-labe.component';
import { GuineaVilleLeloumaComponent } from './guinea-ville-lelouma/guinea-ville-lelouma.component';
import { GuineaVilleLolaComponent } from './guinea-ville-lola/guinea-ville-lola.component';
import { GuineaVilleMacentaComponent } from './guinea-ville-macenta/guinea-ville-macenta.component';
import { GuineaVilleMaliComponent } from './guinea-ville-mali/guinea-ville-mali.component';
import { GuineaVilleMamouComponent } from './guinea-ville-mamou/guinea-ville-mamou.component';
import { GuineaVilleMandianaComponent } from './guinea-ville-mandiana/guinea-ville-mandiana.component';
import { GuineaVilleNzerekoreComponent } from './guinea-ville-nzerekore/guinea-ville-nzerekore.component';
import { GuineaVilleOuroussComponent } from './guinea-ville-ourouss/guinea-ville-ourouss.component';
import { GuineaVilleSiguiriComponent } from './guinea-ville-siguiri/guinea-ville-siguiri.component';
import { GuineaVilleTelimeleComponent } from './guinea-ville-telimele/guinea-ville-telimele.component';
import { GuineaVilleTougueComponent } from './guinea-ville-tougue/guinea-ville-tougue.component';
import { GuineaVilleYomouComponent } from './guinea-ville-yomou/guinea-ville-yomou.component';
import { GuineaVilleYoukounkounComponent } from './guinea-ville-youkounkoun/guinea-ville-youkounkoun.component';
import { DrcVilleBandunduComponent } from './drc-ville-bandundu/drc-ville-bandundu.component';
import { DrcVilleBarakaComponent } from './drc-ville-baraka/drc-ville-baraka.component';
import { DrcVilleBeniComponent } from './drc-ville-beni/drc-ville-beni.component';
import { DrcVilleBoendeComponent } from './drc-ville-boende/drc-ville-boende.component';
import { DrcVilleBomaComponent } from './drc-ville-boma/drc-ville-boma.component';
import { DrcVilleBukavuComponent } from './drc-ville-bukavu/drc-ville-bukavu.component';
import { DrcVilleBuniaComponent } from './drc-ville-bunia/drc-ville-bunia.component';
import { DrcVilleButaComponent } from './drc-ville-buta/drc-ville-buta.component';
import { DrcVilleButemboComponent } from './drc-ville-butembo/drc-ville-butembo.component';
import { DrcVilleGbadoliteComponent } from './drc-ville-gbadolite/drc-ville-gbadolite.component';
import { DrcVilleGemenaComponent } from './drc-ville-gemena/drc-ville-gemena.component';
import { DrcVilleGomaComponent } from './drc-ville-goma/drc-ville-goma.component';
import { DrcVilleInongoComponent } from './drc-ville-inongo/drc-ville-inongo.component';
import { DrcVilleIsiroComponent } from './drc-ville-isiro/drc-ville-isiro.component';
import { DrcVilleKabindaComponent } from './drc-ville-kabinda/drc-ville-kabinda.component';
import { DrcVilleKalemieComponent } from './drc-ville-kalemie/drc-ville-kalemie.component';
import { DrcVilleKaminaComponent } from './drc-ville-kamina/drc-ville-kamina.component';
import { DrcVilleKanangaComponent } from './drc-ville-kananga/drc-ville-kananga.component';
import { DrcVilleKengeComponent } from './drc-ville-kenge/drc-ville-kenge.component';
import { DrcVilleKikwitComponent } from './drc-ville-kikwit/drc-ville-kikwit.component';
import { DrcVilleKinduComponent } from './drc-ville-kindu/drc-ville-kindu.component';
import { DrcVilleKisanganiComponent } from './drc-ville-kisangani/drc-ville-kisangani.component';
import { DrcVilleKinshassaComponent } from './drc-ville-kinshassa/drc-ville-kinshassa.component';
import { DrcVilleKolweziComponent } from './drc-ville-kolwezi/drc-ville-kolwezi.component';
import { DrcVilleLikasiComponent } from './drc-ville-likasi/drc-ville-likasi.component';
import { DrcVilleLisalaComponent } from './drc-ville-lisala/drc-ville-lisala.component';
import { DrcVilleLubumbashiComponent } from './drc-ville-lubumbashi/drc-ville-lubumbashi.component';
import { DrcVilleLusamboComponent } from './drc-ville-lusambo/drc-ville-lusambo.component';
import { DrcVilleMatadiComponent } from './drc-ville-matadi/drc-ville-matadi.component';
import { DrcVilleMbandakaComponent } from './drc-ville-mbandaka/drc-ville-mbandaka.component';
import { DrcVilleMbujimayiComponent } from './drc-ville-mbujimayi/drc-ville-mbujimayi.component';
import { DrcVilleMueneDituComponent } from './drc-ville-muene-ditu/drc-ville-muene-ditu.component';
import { DrcVilleTshikapaComponent } from './drc-ville-tshikapa/drc-ville-tshikapa.component';
import { DrcVilleUviraComponent } from './drc-ville-uvira/drc-ville-uvira.component';
import { DrcVilleZongoComponent } from './drc-ville-zongo/drc-ville-zongo.component';
import { DrcRegionKinshassaComponent } from './drc-region-kinshassa/drc-region-kinshassa.component';
import { DrcRegionBasZaireComponent } from './drc-region-bas-zaire/drc-region-bas-zaire.component';
import { DrcRegionBandunduComponent } from './drc-region-bandundu/drc-region-bandundu.component';
import { DrcRegionEquateurComponent } from './drc-region-equateur/drc-region-equateur.component';
import { DrcRegionHautZaireComponent } from './drc-region-haut-zaire/drc-region-haut-zaire.component';
import { DrcRegionKivuComponent } from './drc-region-kivu/drc-region-kivu.component';
import { DrcRegionShabaComponent } from './drc-region-shaba/drc-region-shaba.component';
import { DrcRegionKasaiOrientalComponent } from './drc-region-kasai-oriental/drc-region-kasai-oriental.component';
import { DrcRegionKasaiOccidentalComponent } from './drc-region-kasai-occidental/drc-region-kasai-occidental.component';

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
    CheckoutformComponent,
    ProductOnlineComponent,
    ProductClickandcollectComponent,
    ProductSecondHandComponent,
    ProductNearbyShopComponent,
    ServiceOnlineComponent,
    ServiceInpersonComponent,
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
    LivraisonComponent,
    SignupSupplyComponent,
    SignupRequestComponent,
    SignupDeliveryComponent,
    GuineaMapComponent,
    BurkinaMapComponent,
    DrcongoMapComponent,
    GuineaRegionConakryComponent,
    GuineaRegionKindiaComponent,
    GuineaRegionBokeComponent,
    GuineaRegionLabeComponent,
    GuineaRegionMamouComponent,
    GuineaRegionFaranahComponent,
    GuineaRegionKankanComponent,
    GuineaRegionNzerekoreComponent,
    GuineaVilleConakryComponent,
    GuineaVilleBeylaComponent,
    GuineaVilleBoffaComponent,
    GuineaVilleBokeComponent,
    GuineaVilleCoyahComponent,
    GuineaVilleDabolaComponent,
    GuineaVilleDalabaComponent,
    GuineaVilleDinguirayeComponent,
    GuineaVilleDubrekaComponent,
    GuineaVilleFaranahComponent,
    GuineaVilleForecariahComponent,
    GuineaVilleFriaComponent,
    GuineaVilleGaoualComponent,
    GuineaVilleGueckedouComponent,
    GuineaVilleKamsarComponent,
    GuineaVilleKankanComponent,
    GuineaVilleKerouaneComponent,
    GuineaVilleKindiaComponent,
    GuineaVilleKissidougouComponent,
    GuineaVilleKoubiaComponent,
    GuineaVilleKouroussaComponent,
    GuineaVilleLabeComponent,
    GuineaVilleLeloumaComponent,
    GuineaVilleLolaComponent,
    GuineaVilleMacentaComponent,
    GuineaVilleMaliComponent,
    GuineaVilleMamouComponent,
    GuineaVilleMandianaComponent,
    GuineaVilleNzerekoreComponent,
    GuineaVilleOuroussComponent,
    GuineaVilleSiguiriComponent,
    GuineaVilleTelimeleComponent,
    GuineaVilleTougueComponent,
    GuineaVilleYomouComponent,
    GuineaVilleYoukounkounComponent,
    DrcVilleBandunduComponent,
    DrcVilleBarakaComponent,
    DrcVilleBeniComponent,
    DrcVilleBoendeComponent,
    DrcVilleBomaComponent,
    DrcVilleBukavuComponent,
    DrcVilleBuniaComponent,
    DrcVilleButaComponent,
    DrcVilleButemboComponent,
    DrcVilleGbadoliteComponent,
    DrcVilleGemenaComponent,
    DrcVilleGomaComponent,
    DrcVilleInongoComponent,
    DrcVilleIsiroComponent,
    DrcVilleKabindaComponent,
    DrcVilleKalemieComponent,
    DrcVilleKaminaComponent,
    DrcVilleKanangaComponent,
    DrcVilleKengeComponent,
    DrcVilleKikwitComponent,
    DrcVilleKinduComponent,
    DrcVilleKisanganiComponent,
    DrcVilleKinshassaComponent,
    DrcVilleKolweziComponent,
    DrcVilleLikasiComponent,
    DrcVilleLisalaComponent,
    DrcVilleLubumbashiComponent,
    DrcVilleLusamboComponent,
    DrcVilleMatadiComponent,
    DrcVilleMbandakaComponent,
    DrcVilleMbujimayiComponent,
    DrcVilleMueneDituComponent,
    DrcVilleTshikapaComponent,
    DrcVilleUviraComponent,
    DrcVilleZongoComponent,
    DrcRegionKinshassaComponent,
    DrcRegionBasZaireComponent,
    DrcRegionBandunduComponent,
    DrcRegionEquateurComponent,
    DrcRegionHautZaireComponent,
    DrcRegionKivuComponent,
    DrcRegionShabaComponent,
    DrcRegionKasaiOrientalComponent,
    DrcRegionKasaiOccidentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
