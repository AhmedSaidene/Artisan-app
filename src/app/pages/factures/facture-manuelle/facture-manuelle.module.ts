import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactureManuellePageRoutingModule } from './facture-manuelle-routing.module';

import { FactureManuellePage } from './facture-manuelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactureManuellePageRoutingModule
  ],
  declarations: [FactureManuellePage]
})
export class FactureManuellePageModule {}
