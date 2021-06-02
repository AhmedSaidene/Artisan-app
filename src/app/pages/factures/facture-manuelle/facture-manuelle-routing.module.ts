import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactureManuellePage } from './facture-manuelle.page';

const routes: Routes = [
  {
    path: '',
    component: FactureManuellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureManuellePageRoutingModule {}
