import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { ProduitService } from '../../../../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produit;
  
  isChanged = false;

  updated;
  
  constructor( private router: Router,
               private produitService: ProduitService,
               private toastController: ToastService) {  
    console.log(this.router.getCurrentNavigation().extras.state);
  }
 
  ngOnInit() {
    this.produit = history.state; 
    console.log(this.produit);
  }

     
/**
 * async submit() {
  if (this.validateInputs()) {
   this.authService.register(
     //this.postData.langue, 
     );
     this.router.navigate(['/entreprise']);
   } else {
     this.toastService.presentToast('remplir les champs');
     }
       
   }
 */

  update() {
    if (this.isChanged) {  
      this.produitService.update(this.produit.id, this.produit)
      .subscribe( data => {
        if(data['success'] == true) {
          console.log(data);
          console.log("your product was updated ! ");
          this.toastController.presentToast("modification avec succes !");
       
        } else {
          this.toastController.presentToast("Une erreur s'est produite !");
        }
      });
    } else {
      console.log("anythig updated ! ");
      this.toastController.presentToast("anythig updated ! ");
    }
  }

  delete() {
    this.produitService.delete(this.produit.id)
    .subscribe( data => {
      if(data['success'] == true) {
        console.log(data);
        this.toastController.presentToast("your product was deleted ! ");
      } else {
        this.toastController.presentToast("Une erreur s'est produite !");
      }
    });
  }
 

}
