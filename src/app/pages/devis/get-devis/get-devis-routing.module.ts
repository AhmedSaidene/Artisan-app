import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDevisPage } from './get-devis.page';

const routes: Routes = [
  {
    path: '',
    component: GetDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDevisPageRoutingModule {}
