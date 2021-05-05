import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationDevisPage } from './configuration-devis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationDevisPageRoutingModule {}
