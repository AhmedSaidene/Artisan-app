import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Produit } from '../../../models/produit.model'; 
import { take } from 'rxjs/operators';
//import { AddProductPage } from '../add-product/add-product.page';
//import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  @Input() produit : Produit;
  
  updated : Produit;
  
  constructor() { }

  ngOnInit() {
    /*
    this.updated = {
      nom : "nom",
    fabricant: "fabricant",
    reference : "reference",
    prix : 11,
    desc : "desc"
  };
  */
  }
 

}
