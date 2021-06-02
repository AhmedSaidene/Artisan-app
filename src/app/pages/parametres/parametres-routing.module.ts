import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametresPage } from './parametres.page';

const routes: Routes = [
  {
    path: '',
    component: ParametresPage
  },
  {
    path: 'comptes',
    loadChildren: () => import('./comptes/comptes.module').then( m => m.ComptesPageModule)
  },
  {
    path: 'interventions',
    loadChildren: () => import('./interventions/interventions.module').then( m => m.InterventionsPageModule)
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then( m => m.PrestationsPageModule)
  },
  {
    path: 'traveaux',
    loadChildren: () => import('./traveaux/traveaux.module').then( m => m.TraveauxPageModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
  {
    path: 'model-devis',
    loadChildren: () => import('./model-devis/model-devis.module').then( m => m.ModelDevisPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories-routing.module').then( m => m.CategoriesPageRoutingModule)
  },
  {
    path: 'travail',
    loadChildren: () => import('./travail/travail.module').then( m => m.TravailPageModule)
  },
  {
    path: 'prestation',
    loadChildren: () => import('./prestation/prestation.module').then( m => m.PrestationPageModule)
  },
  {
    path: 'intervention',
    loadChildren: () => import('./intervention/intervention.module').then( m => m.InterventionPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametresPageRoutingModule {}
