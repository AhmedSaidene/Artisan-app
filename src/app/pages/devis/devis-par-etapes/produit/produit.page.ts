import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { ToastService } from 'src/app/services/toast.service';
import {ProduitsListeComponent } from '../../../../components/produits-liste/produits-liste.component';
import { ModifierProduitComponent } from '../../../../components/modifier-produit/modifier-produit.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
//la resultat de recherche
  produits  = [];
 //le devis resultat : à passer dans la route
  devis = {
    client : {},
    intervention : {},
    prestation : {},
    traveaux : {},
    produits : []
  }
  //les choix des produits
  devis_produits : any = [];

  constructor(private router: Router,
    private toastService: ToastService,
    private categorieService: CategorieService,
    public popoverController: PopoverController) { }
    
  ngOnInit() {
    console.log(history.state.devis);
    this.devis.client = history.state.devis.client; 
    this.devis.intervention = history.state.devis.intervention; 
    this.devis.prestation = history.state.devis.prestation; 
    this.devis.traveaux = history.state.devis.traveaux;
    console.log(this.devis);
  }

  choice(id: number) {
    this.devis.traveaux = id;
    console.log(this.devis.traveaux);
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
       /*
      const popover = await this.popoverController.create({
        component: ProduitsListeComponent,
        cssClass: 'popover',
        translucent: true,
        componentProps: { produits: this.produits }
      });
      await popover.present();
      await popover.onDidDismiss().then((data) => {
        console.log('onDidDismiss', data);
       if (data['data'] != undefined) {
        this.devis_produits.push({ 
          produit_id : data['data'].id,
          lib : data['data'].lib,
          img : data['data'].img,
          //fabricant : data['data'].fabricant,
          reference : data['data'].reference,
          prix_par_achat : data['data'].prix_achat,
          prix_par_vente_unitaire : data['data'].prix_vente,
          quantite: 1,
          tva : data['data'].tva,
          desc : data['data'].desc
      });
        console.log(this.devis_produits); 
        this._ajouter();
       }
      }) */

    }
  }
  choisirProduit(produit: any) {
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
  } else { this.ajouter = true; }
  }
/*

  async search(val) {
    if(val != '') {
     this.categorieService.search(val.trim()).subscribe((produits) => {
      console.log(produits);
      this.produits= produits['data'];
      
     });
     const popover = await this.popoverController.create({
      component: ProduitsListeComponent,
      componentProps: { produits: this.produits }
    });
    await popover.present();
    //data est le produit choisi
    await popover.onDidDismiss().then((data) => {
      console.log('onDidDismiss', data);
     if (data['data'] != undefined) {
      this.devis_produits.push({ 
        produit_id : data['data'].id,
        lib : data['data'].lib,
        img : data['data'].img,
        //fabricant : data['data'].fabricant,
        reference : data['data'].reference,
        prix_par_achat : data['data'].prix_achat,
        prix_par_vente_unitaire : data['data'].prix_vente,
        quantite: 1,
        tva : data['data'].tva,
        desc : data['data'].desc
    });
      console.log(this.devis_produits); 
      this._ajouter();
     }
    })
    }
  }
*/
  supprimer(produit: any) {
    for ( let i = 0; i < this.devis_produits.length ; i++) {
      if (produit.id == this.devis_produits[i].id) {
        this.devis_produits.splice(0, i);
      }
    }
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
          /**description: "aa"
          designation: "ref"
          prix_par_vente_unitaire: 11
          quantite: 1 
          .....
          { 
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
  }*/
        }
      }
     // this.devis_produits.push(data['data']);
     // console.log(this.devis_produits); 
      this._ajouter();
     }
    })
  }

  submit() {
    this.devis.produits = this.devis_produits;
    console.log(this.devis);
    //this.devis_produits
    this.router.navigateByUrl('/home/devis/devis-par-etapes/validation', { state: { devis : this.devis }});
  }
  
}

