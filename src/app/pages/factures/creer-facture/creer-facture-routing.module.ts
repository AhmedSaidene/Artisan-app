import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerFacturePage } from './creer-facture.page';

const routes: Routes = [
  {
    path: '',
    component: CreerFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerFacturePageRoutingModule {}
