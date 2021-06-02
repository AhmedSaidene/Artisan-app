import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelDevisPageRoutingModule } from './model-devis-routing.module';

import { ModelDevisPage } from './model-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelDevisPageRoutingModule
  ],
  declarations: [ModelDevisPage]
})
export class ModelDevisPageModule {}
