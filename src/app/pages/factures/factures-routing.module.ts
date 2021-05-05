import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturesPage } from './factures.page';

const routes: Routes = [
  {
    path: '',
    component: FacturesPage,
    children: [
      {
        path: 'factures',
        loadChildren: () => import('../../pages/factures-pages/factures/factures.module').then( m => m.FacturesPageModule)
      },
      {
        path: 'creer-facture',
        loadChildren: () => import('../../pages/factures-pages/creer-facture/creer-facture.module').then( m => m.CreerFacturePageModule)
      },
      {
        path: 'devis-en-facture',
        loadChildren: () => import('../../pages/factures-pages/devis-en-facture/devis-en-facture.module').then( m => m.DevisEnFacturePageModule)
      },
      {
        path: 'facture-manuelle',
        loadChildren: () => import('../../pages/factures-pages/facture-manuelle/facture-manuelle.module').then( m => m.FactureManuellePageModule)
      },
      {
        path: 'get-factures',
        loadChildren: () => import('../../pages/factures-pages/get-factures/get-factures.module').then( m => m.GetFacturesPageModule)
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturesPageRoutingModule {}
