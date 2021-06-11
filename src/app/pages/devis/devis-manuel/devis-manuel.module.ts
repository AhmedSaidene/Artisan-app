import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisManuelPageRoutingModule } from './devis-manuel-routing.module';

import { DevisManuelPage } from './devis-manuel.page';

import { ClientComponent } from '../../../components/client/client.component';
import { TotalComponent } from '../../../components/total/total.component';
import { InfoBancairesComponent } from '../../../components/info-bancaires/info-bancaires.component';
import { NomDevisComponent } from '../../../components/nom-devis/nom-devis.component';
import { AddInterventionComponent  } from '../../../components/add-intervention/add-intervention.component';
import { ModifierProduitComponent } from '../../../components/modifier-produit/modifier-produit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisManuelPageRoutingModule
  ],
  declarations: [
    DevisManuelPage, 
    ClientComponent, 
    TotalComponent, 
    InfoBancairesComponent, 
    NomDevisComponent,
    AddInterventionComponent,
    ModifierProduitComponent
  ]
})
export class DevisManuelPageModule {}
