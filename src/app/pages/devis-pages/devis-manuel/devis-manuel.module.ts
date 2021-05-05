import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisManuelPageRoutingModule } from './devis-manuel-routing.module';

import { DevisManuelPage } from './devis-manuel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisManuelPageRoutingModule
  ],
  declarations: [DevisManuelPage]
})
export class DevisManuelPageModule {}
