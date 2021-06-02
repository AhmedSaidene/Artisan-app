import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ClientsComponent } from "../../components/clients/clients.component";

import { AcceuilPage } from './acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPage
  }
];

@NgModule({
  declarations: [
    ClientsComponent 
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AcceuilPageRoutingModule {}
