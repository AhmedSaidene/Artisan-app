import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-valider-inscription',
  templateUrl: './valider-inscription.component.html',
  styleUrls: ['./valider-inscription.component.scss'],
})
export class ValiderInscriptionComponent implements OnInit {

  constructor( private modalCtrl: ModalController,
               private router: Router) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/home/acceuil']);
  }
 
}
