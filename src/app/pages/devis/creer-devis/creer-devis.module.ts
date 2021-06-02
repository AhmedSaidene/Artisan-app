import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerDevisPageRoutingModule } from './creer-devis-routing.module';

import { CreerDevisPage } from './creer-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerDevisPageRoutingModule
  ],
  declarations: [CreerDevisPage]
})
export class CreerDevisPageModule {}
