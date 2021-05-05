import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraveauxPageRoutingModule } from './traveaux-routing.module';

import { TraveauxPage } from './traveaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraveauxPageRoutingModule
  ],
  declarations: [TraveauxPage]
})
export class TraveauxPageModule {}
