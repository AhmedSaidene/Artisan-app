import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-get-factures',
  templateUrl: './get-factures.page.html',
  styleUrls: ['./get-factures.page.scss'],
})
export class GetFacturesPage implements OnInit {

  factures: any = [];
  searchItem : any;

  constructor(private factureService: FactureService,
              private LoadingCtrl: LoadingController,
              private modalCtrl: ModalController) { }

              async ngOnInit() {
                const loading = await this.LoadingCtrl.create({message: 'Loading...'});
                loading.present();
            
                this.factures = [];
                 this.factureService.get()
                  .subscribe( data => { 
                    loading.dismiss();
                    console.log(data);
                    this.factures =  data['data'];
                    this.searchItem = this.factures;
                  });
              }

  async ionViewWillEnter() {
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
   loading.present();

    this.factures = [];
     this.factureService.get()
      .subscribe( data => { 
       loading.dismiss();
        console.log(data);
        this.factures =  data['data'];
        this.searchItem = this.factures;
      });
  }

  _ionChange(event) {
    console.log(event.detail.value);
    const val = event.target.value;
    this.searchItem = this.factures;
    if( val && val.trim() != '') {
      this.searchItem = this.searchItem.filter((item: any) => {
        return (item.client.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
