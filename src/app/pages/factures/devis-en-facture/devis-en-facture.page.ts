import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-devis-en-facture',
  templateUrl: './devis-en-facture.page.html',
  styleUrls: ['./devis-en-facture.page.scss'],
})
export class DevisEnFacturePage implements OnInit {
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
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}


