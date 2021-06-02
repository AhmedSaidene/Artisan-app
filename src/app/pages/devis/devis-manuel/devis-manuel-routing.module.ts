import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisManuelPage } from './devis-manuel.page';

const routes: Routes = [
  {
    path: '',
    component: DevisManuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisManuelPageRoutingModule {}
