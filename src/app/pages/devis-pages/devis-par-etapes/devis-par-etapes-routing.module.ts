import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisParEtapesPage } from './devis-par-etapes.page';

const routes: Routes = [
  {
    path: '',
    component: DevisParEtapesPage
  },
  {
    path: 'types-client',
    loadChildren: () => import('./pages/types-client/types-client.module').then( m => m.TypesClientPageModule)
  },
  {
    path: 'coordonnees-client',
    loadChildren: () => import('./pages/coordonnees-client/coordonnees-client.module').then( m => m.CoordonneesClientPageModule)
  },
  {
    path: 'intervention',
    loadChildren: () => import('./pages/intervention/intervention.module').then( m => m.InterventionPageModule)
  },
  {
    path: 'prestation',
    loadChildren: () => import('./pages/prestation/prestation.module').then( m => m.PrestationPageModule)
  },
  {
    path: 'traveaux',
    loadChildren: () => import('./pages/traveaux/traveaux.module').then( m => m.TraveauxPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./pages/produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./pages/validation/validation.module').then( m => m.ValidationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisParEtapesPageRoutingModule {}
