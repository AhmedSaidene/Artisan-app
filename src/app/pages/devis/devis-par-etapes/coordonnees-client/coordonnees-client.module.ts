import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordonneesClientPageRoutingModule } from './coordonnees-client-routing.module';

import { CoordonneesClientPage } from './coordonnees-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordonneesClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CoordonneesClientPage],
})
export class CoordonneesClientPageModule {}
