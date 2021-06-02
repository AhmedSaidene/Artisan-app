import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravailPageRoutingModule } from './travail-routing.module';

import { TravailPage } from './travail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravailPageRoutingModule
  ],
  declarations: [TravailPage]
})
export class TravailPageModule {}
