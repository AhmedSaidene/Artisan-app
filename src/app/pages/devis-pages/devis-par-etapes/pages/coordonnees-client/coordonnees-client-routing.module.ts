import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordonneesClientPage } from './coordonnees-client.page';

const routes: Routes = [
  {
    path: '',
    component: CoordonneesClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordonneesClientPageRoutingModule {}
