import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionUserPage } from './inscription-user.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionUserPageRoutingModule {}
