import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients$: Observable<Client[]>;

  entrepriseId = 1;

  constructor(
    private clientService: ClientService,
    private LoadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

    async ngOnInit() {
      const loading = await this.LoadingCtrl.create({message: 'Loading...'});
      loading.present();
  
      this.clients$ = this.clientService.getClientsByEntrepriseId(this.entrepriseId).pipe(
        tap(clients => {
          loading.dismiss();
          console.log(clients);
          return clients;
        })
      );
    }

  openDetailModal(client) {
    console.log(client);
  }
}
