import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
{path: "accueil", component: AccueilComponent },
{path: "header", component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
