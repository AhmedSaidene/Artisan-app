import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDevisPage } from './model-devis.page';

const routes: Routes = [
  {
    path: '',
    component: ModelDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelDevisPageRoutingModule {}
