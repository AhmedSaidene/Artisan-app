import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Produit } from '../../../models/produit.model';
import { ProduitService } from '../../../services/produit.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  produits: any = [];
  searchItem : any;
  nbr : number;
  lib: any;
  id : any;
 
  constructor(
    private produitService: ProduitService,
    private LoadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  async ngOnInit() {
   
  }
  
  ionViewWillEnter() { 
    this.produits = [];
    this.id = this.route.snapshot.params['id'];
    this.lib = this.route.snapshot.params['lib'];
    this.produitService.get(this.id)
    .subscribe( data => {
      console.log(data);
      this.produits =  data['data'];
      this.nbr = this.produits.length;
      this.searchItem = this.produits;
    });
    }

    
    _ionChange(event) {
      console.log(event.detail.value);
      const val = event.target.value;
      this.searchItem = this.produits;
      if( val && val.trim() != '') {
        this.searchItem = this.searchItem.filter((item: any) => {
          return (item.lib.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }

    }

    addProduct() {
      this.router.navigateByUrl('/home/parametres/produit', { state: {role : 'add'} });
     }
    openProductDetails(produit: any) {
   this.router.navigateByUrl('/home/parametres/produit', { state: {role : 'update', produit : produit, categorieId : this.id} });
  }

}
