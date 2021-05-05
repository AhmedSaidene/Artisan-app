import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'user',
        loadChildren: () => import('../pages/inscription-user/inscription-user.module').then(m => m.InscriptionUserPageModule)
      },
      {
        path: 'entreprise',
        loadChildren: () => import('../pages/inscription-entreprise/inscription-entreprise.module').then(m => m.InscriptionEntreprisePageModule)
       },
       {
         path: 'configuration-devis',
         loadChildren: () => import('../pages/configuration-devis/configuration-devis.module').then( m => m.ConfigurationDevisPageModule)
       },
       {
         path: 'login',
         loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
