import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraveauxPage } from './traveaux.page';

const routes: Routes = [
  {
    path: '',
    component: TraveauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraveauxPageRoutingModule {}
