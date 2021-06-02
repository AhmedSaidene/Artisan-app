import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerDevisPage } from './creer-devis.page';

const routes: Routes = [
  {
    path: '',
    component: CreerDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerDevisPageRoutingModule {}
