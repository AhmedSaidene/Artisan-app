import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Produit } from '../../../../models/produit.model';
import { ProduitService } from '../../../../services/produit.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  produits : any = [];
  nbr : number;
  lib: any;
 
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
    const id = this.route.snapshot.params['id'];
    this.lib = this.route.snapshot.params['lib'];
    this.produitService.get(id)
    .subscribe( data => {
      console.log(data);
      this.produits =  data['data'];
      this.nbr = this.produits.length;
    });
    }

    naviateToProduct(produit: any) {
   this.router.navigateByUrl('/home/parametres/categories/produit', { state: produit });
  }

}
