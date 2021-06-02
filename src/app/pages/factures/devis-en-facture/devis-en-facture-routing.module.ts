import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisEnFacturePage } from './devis-en-facture.page';

const routes: Routes = [
  {
    path: '',
    component: DevisEnFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisEnFacturePageRoutingModule {}
