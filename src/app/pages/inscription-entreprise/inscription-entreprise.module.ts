import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionEntreprisePageRoutingModule } from './inscription-entreprise-routing.module';

import { InscriptionEntreprisePage } from './inscription-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionEntreprisePageRoutingModule
  ],
  declarations: [InscriptionEntreprisePage]
})
export class InscriptionEntreprisePageModule {}
