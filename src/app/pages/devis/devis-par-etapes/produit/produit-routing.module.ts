import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ProduitsListeComponent } from "../../../../components/produits-liste/produits-liste.component";

import { ProduitPage } from './produit.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitPage
  }
];

@NgModule({
  declarations: [
    ProduitsListeComponent 
  ],
  imports: [RouterModule.forChild(routes) , CommonModule],
  exports: [RouterModule], 
})
export class ProduitPageRoutingModule {}
