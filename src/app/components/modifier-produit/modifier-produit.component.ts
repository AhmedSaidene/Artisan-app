import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss'],
})
export class ModifierProduitComponent implements OnInit {

  @Input() produit;

  updated = { 
    prix_par_vente_unitaire: {},
    quantite: {},
  designation: {},
  description: {}
};

  constructor(public popoverController: PopoverController) {   
    console.log("modifier produit : " + this.produit)
    console.log("modifier produit : " + this.updated)
  }

  ngOnInit() {
    
    this.updated.prix_par_vente_unitaire = this.produit.prix_par_vente_unitaire;
    this.updated.quantite = 1;
    this.updated.designation = this.produit.reference;
    this.updated.description = this.produit.desc;
     
    console.log("modifier produit : " + this.produit)
    console.log("modifier produit : " + this.updated)
  } 

  dismiss() {
    console.log("modifier produit : " + this.produit)
    console.log("modifier produit : " + this.updated)

    console.log(this.updated);
    this.popoverController.dismiss( this.updated );
  }
}
