import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-nom-devis',
  templateUrl: './nom-devis.component.html',
  styleUrls: ['./nom-devis.component.scss'],
})
export class NomDevisComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }
 nom = ''
  ngOnInit() {}

  close() {
    console.log(this.nom)
    this.popoverController.dismiss(this.nom)
  }

}
