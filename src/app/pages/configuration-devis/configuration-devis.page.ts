import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValiderInscriptionComponent } from '../../components/valider-inscription/valider-inscription.component';
import { StorageService } from 'src/app/services/storage.service';
import { ModelDevisService } from 'src/app/services/model-devis.service';

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
customPopoverOptions = {
  cssClass: 'my-class'
}
constructor(  private modelDevisService: ModelDevisService,
              private modalCtrl: ModalController,
              private storage: StorageService)
              {
                this.storage.get('entreprise_id').then((val) => {
                  this.devis.entrepriseId = val;            
                });
              }

ngOnInit() {}

 async openValidationModal(){
    const modal = await this.modalCtrl.create({
      component: ValiderInscriptionComponent
    });
    await modal.present(); 
  } 
  submit() {
    console.log(this.devis);
  this.modelDevisService.post(this.devis).subscribe(
data => {
console.log(data);
if( data['success'] == true){

  console.log(this.devis);
  this.openValidationModal();
 
}
},
error => {
console.log(error);
}
);
}

}