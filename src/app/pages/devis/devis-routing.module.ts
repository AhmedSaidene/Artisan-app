import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisPage } from './devis.page';

const routes: Routes = [
  {
    path: '',
    component: DevisPage,
    children: [
      {
        path: 'devis',
        loadChildren: () => import('../../pages/devis-pages/devis/devis.module').then( m => m.DevisPageModule)
      },
      {
        path: 'creer-devis',
        loadChildren: () => import('../../pages/devis-pages/creer-devis/creer-devis.module').then( m => m.CreerDevisPageModule)
      },
      {
        path: 'devis-manuel',
        loadChildren: () => import('../../pages/devis-pages/devis-manuel/devis-manuel.module').then( m => m.DevisManuelPageModule)
      },
      {
        path: 'devis-par-etapes',
        loadChildren: () => import('../../pages/devis-pages/devis-par-etapes/devis-par-etapes.module').then( m => m.DevisParEtapesPageModule)
      },
      {
        path: 'get-devis',
        loadChildren: () => import('../../pages/devis-pages/get-devis/get-devis.module').then( m => m.GetDevisPageModule)
      },
      {
        path: 'statistiques',
        loadChildren: () => import('../../pages/devis-pages/statistiques/statistiques.module').then( m => m.StatistiquesPageModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisPageRoutingModule {}
