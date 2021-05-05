import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypesClientPageRoutingModule } from './types-client-routing.module';

import { TypesClientPage } from './types-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypesClientPageRoutingModule
  ],
  declarations: [TypesClientPage]
})
export class TypesClientPageModule {}
