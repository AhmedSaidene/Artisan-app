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
        loadChildren: () => import('./devis/devis.module').then( m => m.DevisPageModule)
      },
      {
        path: 'creer-devis',
        loadChildren: () => import('./creer-devis/creer-devis.module').then( m => m.CreerDevisPageModule)
      },
      {
        path: 'devis-manuel',
        loadChildren: () => import('./devis-manuel/devis-manuel.module').then( m => m.DevisManuelPageModule)
      },
      {
        path: 'devis-par-etapes',
        loadChildren: () => import('./devis-par-etapes/devis-par-etapes.module').then( m => m.DevisParEtapesPageModule)
      },
      {
        path: 'get-devis',
        loadChildren: () => import('./get-devis/get-devis.module').then( m => m.GetDevisPageModule)
      },
      {
        path: 'statistiques',
        loadChildren: () => import('./statistiques/statistiques.module').then( m => m.StatistiquesPageModule)
      },
      {
        path: '',
        redirectTo: '/home/devis/devis',
        pathMatch: 'full' 
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisPageRoutingModule {}
