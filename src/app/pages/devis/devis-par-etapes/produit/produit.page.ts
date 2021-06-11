import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { CategorieService } from 'src/app/services/categorie.service';
import { ToastService } from 'src/app/services/toast.service';
import {ProduitsListeComponent } from '../../../../components/produits-liste/produits-liste.component';
import { ModifierProduitComponent } from '../../../../components/modifier-produit/modifier-produit.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  @Input() documentManuel;

//la resultat de recherche
  produits  = [];
 //le devis resultat : à passer dans la route
 devis = {
  client : {},
  interventions : [],
}
intervention : any
  //les choix des produits
  devis_produits : any = [];

  constructor(private router: Router,
    private toastService: ToastService,
    private categorieService: CategorieService,
    private modalCtrl: ModalController,
    public popoverController: PopoverController) { }
    
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   this.intervention = history.state.intervention; 
   console.log(this.devis);
   console.log(this.intervention);
  }

  choice(id: number) {
  }
  //valeur de recherche
  categorie = '';   
  async _ionChange(event) {
    console.log(event.detail.value);
    const categorie = event.target.value.trim();
    if( categorie && categorie != '') {
      this.categorieService.search(categorie).subscribe((produits) => {
        console.log(produits);
        this.produits = produits['data'];
       });
    }
  }
  choisirProduit(produit: any) {
    console.log(this.devis);
    //ajouter le produit choisi à la liste des produits 
    this.devis_produits.push({ 
      produit_id : produit.id,
      lib : produit.lib,
      img : produit.img,
      //fabricant : data['data'].fabricant,
      reference :produit.reference,
      prix_par_achat : produit.prix_achat,
      prix_par_vente_unitaire : produit.prix_vente,
      quantite: 1,
      tva : produit.tva,
      desc : produit.desc
  });
    console.log(this.devis_produits); 
    this._ajouter();
    this.produits = [];
    this.categorie = ''
  }
  //cet attribue ajouter pour afficher le searchbar ou le boutton ajouter un produit
  ajouter = true;
  _ajouter() {
   if (this.ajouter == true)
   { this.ajouter = false;
  } else {
     this.ajouter = true; 
  }
  console.log(this.devis_produits)
  }
  supprimer(produit: any) {
    for ( let i = 0; i < this.devis_produits.length ; i++) {
      if (produit.id == this.devis_produits[i].id) {
        this.devis_produits.splice(0, i);
      }
    }
    console.log(this.devis_produits)
  }

  async modifier(produit: any) {
    const popover = await this.popoverController.create({
      component: ModifierProduitComponent,
      componentProps: { produit: produit },
      cssClass: 'popover-content'
    });
    await popover.present();
    await popover.onDidDismiss().then((data) => {
      console.log('onDidDismiss', data);
     if (data['data'] != undefined) {
      for ( let i = 0; i < this.devis_produits.length ; i++) {
        if (produit.produit_id == this.devis_produits[i].produit_id) {
          this.devis_produits[i] = data['data'];
         
        }
      }
      this._ajouter();
     }
    })
    console.log(this.devis_produits)
  }

  submit() {
    if(this.documentManuel){
  
      this.modalCtrl.dismiss({ produits : this.devis_produits})
    } else {
      console.log(this.devis);
      if(this.devis_produits.length == 0) {
  this.toastService.presentToast('Ajouter un produit')
      } else {          
   this.intervention['produits'] = this.devis_produits
    console.log(this.intervention);
    this.devis.interventions.push(this.intervention)
    console.log(this.devis);
    this.router.navigateByUrl('/home/devis/devis-par-etapes/validation', { state:  { client : this.devis.client, interventions: this.devis.interventions }});
         }
    }
  }
  closeModal() {
    this.modalCtrl.dismiss(null)
  }
  
}

