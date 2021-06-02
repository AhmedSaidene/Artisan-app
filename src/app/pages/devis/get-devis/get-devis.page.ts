import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-get-devis',
  templateUrl: './get-devis.page.html',
  styleUrls: ['./get-devis.page.scss'],
})
export class GetDevisPage implements OnInit {

  devis: any = [];
  searchItem : any;

  constructor(private devisService: DevisService,
              private LoadingCtrl: LoadingController,
              private modalCtrl: ModalController) { }

  async ngOnInit() {
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.devis = [];
     this.devisService.get()
      .subscribe( data => { 
        loading.dismiss();
        console.log(data);
        this.devis =  data['data'];
        this.searchItem = this.devis;
      });
  }

  _ionChange(event) {
    console.log(event.detail.value);
    const val = event.target.value;
    this.searchItem = this.devis;
    if( val && val.trim() != '') {
      this.searchItem = this.searchItem.filter((item: any) => {
        return (item.client.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

