import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ValiderInscriptionComponent } from '../../components/valider-inscription/valider-inscription.component';
import { BuiltinTypeName } from '@angular/compiler';

@Component({
  selector: 'app-configuration-devis',
  templateUrl: './configuration-devis.page.html',
  styleUrls: ['./configuration-devis.page.scss'],
})
export class ConfigurationDevisPage implements OnInit {

devis = {
  iban : ""
}
constructor(  private router: Router,
              private userService: UserService,
              private modalCtrl: ModalController ) { }

ngOnInit() {}

 async openValidationModal(){
    const modal = await this.modalCtrl.create({
      component: ValiderInscriptionComponent
    });
    
    await modal.present();
    
  }

 submit() {
    console.log(this.devis);
    this.openValidationModal();
}

}