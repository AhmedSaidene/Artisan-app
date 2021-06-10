import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPageRoutingModule } from './produit-routing.module';

import { CategoriesPage } from '../categories/categories.page';

import { ProduitPage } from './produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProduitPage, CategoriesPage]
})
export class ProduitPageModule {}
