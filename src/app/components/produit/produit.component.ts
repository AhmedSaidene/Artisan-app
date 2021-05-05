import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {

  updated: Produit; 

  constructor() { }

  ngOnInit() {}

}
