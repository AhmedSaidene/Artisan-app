import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFacturesPageRoutingModule } from './get-factures-routing.module';

import { GetFacturesPage } from './get-factures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetFacturesPageRoutingModule
  ],
  declarations: [GetFacturesPage]
})
export class GetFacturesPageModule {}
