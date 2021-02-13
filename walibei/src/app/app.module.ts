import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { ServiceComponent } from './service/service.component';
import { EmploiComponent } from './emploi/emploi.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { RechercherComponent } from './rechercher/rechercher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ProduitComponent,
    ServiceComponent,
    EmploiComponent,
    LivraisonComponent,
    TarifsComponent,
    LoginComponent,
    RegisterComponent,
    RechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
