import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrls: ['./produits-liste.component.scss'],
})
export class ProduitsListeComponent implements OnInit {

  @Input() produits;
  choice = {};

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    console.log(this.produits)
  }

  choisirProduit(produit: any) {
    this.choice = produit;
    console.log("choice: " + this.choice);
    this.popoverController.dismiss( this.choice );
  }

}
