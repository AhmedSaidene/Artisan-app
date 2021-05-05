import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    children: [
  {
    path: 'categories',
    loadChildren: () => import('../../pages/categories-pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('../../pages/categories-pages/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('../../pages/categories-pages/produit/produit.module').then( m => m.ProduitPageModule)
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
