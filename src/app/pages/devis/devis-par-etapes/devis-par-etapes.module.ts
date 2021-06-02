import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisParEtapesPageRoutingModule } from './devis-par-etapes-routing.module';

import { DevisParEtapesPage } from './devis-par-etapes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisParEtapesPageRoutingModule
  ],
  declarations: [DevisParEtapesPage]
})
export class DevisParEtapesPageModule {}
