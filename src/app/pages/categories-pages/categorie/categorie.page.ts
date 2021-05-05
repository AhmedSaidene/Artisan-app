import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Produit } from '../../../models/produit.model';
import { ProduitService } from '../../../services/produit.service'

import { ProduitComponent } from '../../../components/produit/produit.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  produit$: Observable<Produit[]>;

  constructor(
    private produitService: ProduitService,
    private LoadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

  async ngOnInit() {
    /*const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.produit$ = this.produitService.getProduits().pipe(
      tap(products => {
        loading.dismiss();
        return products;
      })
    );*/
  }
/*
  async openDetailModal(produit: Produit){
    const modal = await this.modalCtrl.create({
      component: ProduitComponent,
      componentProps: { produit },
    });
    
    await modal.present();
    
    const { data: updatedProduct, role } = await modal.onDidDismiss();
    
    if (updatedProduct && role === 'edit') {
      this.produit$ = this.produit$.pipe(
        map(products => {
         products.forEach((prod) => {
           if( prod.id === updatedProduct.id) {
              prod == updatedProduct;
           }
           return prod;
         });
          return products;
        })
      );
    }
    if(role === 'delete') {
      this.produit$ = this.produit$.pipe(
        map((products) => {
         products.filter((prod) => prod.id !== updatedProduct.id)
          return products;
        })
      );
      }
    }*/
}
