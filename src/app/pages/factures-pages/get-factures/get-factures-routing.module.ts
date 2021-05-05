import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFacturesPage } from './get-factures.page';
import { Component, OnInit } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GetFacturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFacturesPageRoutingModule {}
