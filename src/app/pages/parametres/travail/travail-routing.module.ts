import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravailPage } from './travail.page';

const routes: Routes = [
  {
    path: '',
    component: TravailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravailPageRoutingModule {}
