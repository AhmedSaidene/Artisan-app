import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from "@angular/common";
import { DevisManuelPage } from './devis-manuel.page';
import { ClientComponent } from 'src/app/components/client/client.component';
import { CoordonneesClientPage } from '../devis-par-etapes/coordonnees-client/coordonnees-client.page'
import { ProduitPage } from '../devis-par-etapes/produit/produit.page';

const routes: Routes = [
  {
    path: '',
    component: DevisManuelPage
  }
];

@NgModule({
  declarations: [
    CoordonneesClientPage,
    ProduitPage
  ],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule, ],
})
export class DevisManuelPageRoutingModule {}
