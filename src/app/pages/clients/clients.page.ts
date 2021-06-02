import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: any = [];
  searchItem : any;

  constructor(
    private clientService: ClientService,
    private LoadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) {}
    

    async ngOnInit() {}
   
    _ionChange(event) {
      console.log(event.detail.value);
      const val = event.target.value;
      this.searchItem = this.clients;
      if( val && val.trim() != '') {
        this.searchItem = this.searchItem.filter((item: any) => {
          return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }

    }
     
  async ionViewWillEnter() { 
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.clients = [];
     this.clientService.get()
      .subscribe( data => { 
        loading.dismiss();
        console.log(data);
        this.clients =  data['data'];
        this.searchItem = this.clients;
      });
  }
    

  openDetailModal(client) {
    console.log(client);
  }
}
