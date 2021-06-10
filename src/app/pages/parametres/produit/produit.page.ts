import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { ProduitService } from '../../../services/produit.service';
import { LoadingController } from '@ionic/angular';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  role : {};
  categorieId : {}
  id : number
  form: FormGroup;
  img: string

  categories : any
  constructor( private router: Router,
               private produitService: ProduitService,
               private toastController: ToastService,
               private loadingCtrl: LoadingController,
               private categorieService: CategorieService) {  
    console.log(this.router.getCurrentNavigation().extras.state);
  }
 
  ngOnInit() {
   
this.initForm();
  this.role = history.state.role; 
  //this.categorieId = history.state.categorieId; 
  console.log(this.role);
    if(this.role == 'update') {
  this.img = history.state.produit.img; 
  this.id = history.state.produit.id; 
      this.form.patchValue({
        lib: history.state.produit.lib,
       fabricant:  history.state.produit.fabricant,
       reference: history.state.produit.reference,
       prix_vente: history.state.produit.prix_vente,
       prix_achat: history.state.produit.prix_achat,
       tva: history.state.produit.tva,
       desc: history.state.produit.desc,
      entreprise_id : history.state.produit.entreprise_id,
     categorie_id : history.state.produit.categorie_id
      });
      this.form.updateValueAndValidity();
    }
  }
  async ionViewWillEnter() { 
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();
    this.categories = [];

    this.categorieService.get()
    .subscribe( data => { 
      loading.dismiss();
      console.log(data);
      this.categories =  data['data'];
    });
   
    }

initForm() {
  this.form = new FormGroup({
     lib: new FormControl(null, [Validators.required]),
    fabricant:  new FormControl(null, []),
    reference: new FormControl(null, [Validators.required]),
    prix_vente: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9-]+.[0-9-]*$')
    ])),
    prix_achat: new FormControl(null, Validators.compose([Validators.pattern('^[0-9-]+.[0-9-]*$')])),
    tva: new FormControl(null, [Validators.pattern('^[0-9-]+.[0-9-]*$')]),
    entreprise_id:  new FormControl(this.produitService.entrepriseId, []),
    categorie_id:  new FormControl(this.categorieId, []),
    desc:  new FormControl(null, [Validators.required]),
 });
}
/**
 *  $produit->lib = $request->lib;
        $produit->img = $request->img;
        $produit->fabricant = $request->fabricant;
        $produit->reference = $request->reference;
        $produit->prix_achat = $request->prix_achat;
        $produit->prix_vente = $request->prix_vente;//********
        $produit->desc = $request->desc;
        $produit->tva = $request->tva;//****************
        $produit->entreprise_id = $request->entreprise_id;
        $produit->categorie_id = $request->categorie_id;
 */
   


  update() {
  }

  
async submit(postData: any) {
  console.log(postData)
  const loading = await this.loadingCtrl.create({message: 'Loading...'});
  loading.present();
 
  if(this.role == 'update') {
    this.produitService.update(this.id,this.form.value).subscribe((res) => {
      loading.dismiss();
      console.log(res)
if(res['success'] == true) {
  this.toastController.presentToast('Modification avec succes');
} else {
  this.toastController.presentToast(res['message']);
}
    })
  } else {
    //il faux tester et ajouter la langue
    this.produitService.post(this.form.value).subscribe((res) => {
      console.log(res)
      loading.dismiss();

      if(res['success'] == true) {
        this.toastController.presentToast('Création avec succes');
      } else {
        this.toastController.presentToast(res['message']);
      }
    })
  }
}

  delete() {
    this.produitService.delete(this.id)
    .subscribe( data => {
      if(data['success'] == true) {
        console.log(data);
        this.toastController.presentToast("Produit supprimé avec sucess ! ");
      } else {
        this.toastController.presentToast("Une erreur s'est produite !");
      }
    });
  }
 

}
