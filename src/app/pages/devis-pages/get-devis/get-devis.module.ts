import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDevisPageRoutingModule } from './get-devis-routing.module';

import { GetDevisPage } from './get-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetDevisPageRoutingModule
  ],
  declarations: [GetDevisPage]
})
export class GetDevisPageModule {}
