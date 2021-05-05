import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'acceuil',
        loadChildren: () => import('../pages/acceuil/acceuil.module').then(m => m.AcceuilPageModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('../pages/compte/compte.module').then(m => m.ComptePageModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('../pages/clients/clients.module').then(m => m.ClientsPageModule)
      },
      {
        path: 'devis',
        loadChildren: () => import('../pages/devis/devis.module').then(m => m.DevisPageModule)
      },
      {
        path: 'factures',
        loadChildren: () => import('../pages/factures/factures.module').then(m => m.FacturesPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../pages/categories/categories.module').then( m => m.CategoriesPageModule)
      },
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
