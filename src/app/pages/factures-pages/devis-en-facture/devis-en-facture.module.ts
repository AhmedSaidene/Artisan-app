import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisEnFacturePageRoutingModule } from './devis-en-facture-routing.module';

import { DevisEnFacturePage } from './devis-en-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisEnFacturePageRoutingModule
  ],
  declarations: [DevisEnFacturePage]
})
export class DevisEnFacturePageModule {}
