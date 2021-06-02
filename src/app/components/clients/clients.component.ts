import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {

  //@Input() clients;
  choice = {};
  resultat : any = [];

  constructor(public popoverController: PopoverController,
              private clientService: ClientService) { }

  ngOnInit() {
   /// console.log(this.clients)
  }

  choisir(choix: any) {
    this.choice = choix;
    console.log("choice: " + this.choice);
    this.popoverController.dismiss( this.choice );
  }
  async _ionChange(event) {
    console.log(event.detail.value);
    const val = event.target.value.trim();
    
      await this.clientService.search(val).subscribe((clients) => {
        console.log(clients);
        this.resultat = clients['clients'];
       });
      /*
      
      const popover = await this.popoverController.create({
        component: ClientsComponent,
        cssClass: 'popover',
        translucent: true,
        componentProps: { clients: this.resultat }
      });
      await popover.present();
      const { data } = await popover.onWillDismiss();
      console.log('onDidDismiss ', data);
    */
  }
}
