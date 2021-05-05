import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
              private router: Router) { }

ngOnInit() {}

closeModal() {
this.modalCtrl.dismiss();
}

}