import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ValiderInscriptionComponent } from '../../components/valider-inscription/valider-inscription.component';
import { StorageService } from 'src/app/services/storage.service';
import { ModelDevisService } from 'src/app/services/model-devis.service';
import { AuthService } from 'src/app/services/auth.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration-devis',
  templateUrl: './configuration-devis.page.html',
  styleUrls: ['./configuration-devis.page.scss'],
})
export class ConfigurationDevisPage implements OnInit {

devis = {
  iban : "",
  entrepriseId: ""
}
user = {
      nom: '', 
      prenom: '', 
      tel: 'tel', 
      entreprise_id: '', 
      email: '', 
      password: '',
      role :''
}
entreprise;
constructor(  private modelDevisService: ModelDevisService,
              private modalCtrl: ModalController,
              private storage: StorageService,
              private authService: AuthService,
              private entrepriseService: EntrepriseService,
              private toastService: ToastService,
              private loadingController: LoadingController,
              private router: Router
              ){ }

ngOnInit() {  
  console.log(history.state)
  this.user.nom = history.state.user.nom;
  this.user.prenom = history.state.user.prenom;
  this.user.tel = history.state.user.tel;
  this.user.email = history.state.user.email;  
  this.user.password = history.state.user.password;
  this.user.role = history.state.user.role;
  console.log('user  : ' + this.user)
}

 async openValidationModal(){
    const modal = await this.modalCtrl.create({
      component: ValiderInscriptionComponent
    });
    await modal.present(); 
  } 

 async submit() {
    console.log(this.devis);
    console.log(history.state)
    const loading = await this.loadingController.create({message: 'Loading...'});
    loading.present();
    

this.entrepriseService.post(history.state.entreprise).subscribe((entreprise) => {
  if(entreprise['success'] == true) {
    
  this.user.entreprise_id = entreprise['id'];
  this.devis.entrepriseId = entreprise['id'];
  this.storage.set('entreprise_id', entreprise['id']);
    this.authService.register(this.user).subscribe(data => {
      if(data['success'] == true)  {
       this.storage.set('token', data['token']);    
       this.storage.set('id', data['id']); 
this.modelDevisService.post(this.devis).subscribe(res => {
  if(res['success'] == true) {
    loading.dismiss();
this.toastService.presentToast('Inscription terminé avec succes');
// this.openValidationModal();
this.router.navigate(['/home/acceuil'])
  } else {
    this.toastService.presentToast("L'inscription a échoué");
  }
})
 }  else {
        this.toastService.presentToast("L'inscription a échoué")
      }
     }
     );
  } else {
    this.toastService.presentToast("L'inscription a échoué");
   
  }
})
}

}