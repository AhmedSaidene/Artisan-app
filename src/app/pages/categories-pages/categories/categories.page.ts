import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { CategorieComponent } from '../../../components/categorie/categorie.component';
import { CategoriePage } from '../categorie/categorie.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(
    private productsService: ProduitService,
    private LoadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openCategorieModal(produit: Produit) {
      const modal = await this.modalCtrl.create({
        component: CategoriePage,
        //componentProps: { produit },
      });
      
      await modal.present();
      
      const { data: updatedProduct, role } = await modal.onDidDismiss();
      
      /*if (updatedProduct && role === 'edit') {
        this.produit$ = this.produits$.pipe(
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
        this.products$ = this.products$.pipe(
          map((products) => {
           products.filter((prod) => prod.id !== updatedProduct.id)
            return products;
          })
        );
        }*/
      }
}
