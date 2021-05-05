import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterventionPageRoutingModule } from './intervention-routing.module';

import { InterventionPage } from './intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterventionPageRoutingModule
  ],
  declarations: [InterventionPage]
})
export class InterventionPageModule {}
