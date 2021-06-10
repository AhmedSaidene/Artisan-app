import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ModelDevisService } from 'src/app/services/model-devis.service';
import { ToastService } from 'src/app/services/toast.service';
import { CoordonneesClientPage } from '../devis-par-etapes/coordonnees-client/coordonnees-client.page'
import { ProduitPage } from '../devis-par-etapes/produit/produit.page';
import { DatePipe } from '@angular/common'
import { ClientComponent } from '../../../components/client/client.component';
import { ClientService } from 'src/app/services/client.service';
import { TotalComponent } from '../../../components/total/total.component';
import { InfoBancairesComponent } from '../../../components/info-bancaires/info-bancaires.component';
import { NomDevisComponent } from '../../../components/nom-devis/nom-devis.component';
 

@Component({
  selector: 'app-devis-manuel',
  templateUrl: './devis-manuel.page.html',
  styleUrls: ['./devis-manuel.page.scss'],
  providers: [DatePipe]
})
export class DevisManuelPage implements OnInit {

  devis  = {
    client : null,
    interventions : [],
  }
  intervention = {
    id: 2,
    index: 0,
    prestation: 1,
    produits: [],
  }
  
  /**
   * id: 2
index: 0
prestation: 1
produits: Array(1)
0:
desc: "aa"
img: "aa"
lib: "aa"
prix_par_achat: 11
prix_par_vente_unitaire: 11
produit_id: 10
quantite: 1
reference: "ref"
tva: 0.15
   */
client = {
  existe :null,
  id : null,
  nom : 'Nom client',
  email : null,
  adresse : 'Adresse',
  cp : 'Code postal',
  tel : 'Num téléphone',
  type : null,
  entreprise_id : null
}
  entreprise = {
    id: null,
    lib : null,
    email: null,
    adresse : null,
    tel: null,
    IBAN: null,
    nodelDevisId: null
  }
  date;
  document = {
    lib : 'Devis',
    type: null,
    IBAN: null,
    SWIFT_BIC: null,
    tva: null,
    total_HT: null,
    total_TVA: null,
    total_TTC: null,
    statut: null,
    client_id: null,
    modelDevis: null
  }
  constructor(private router: Router,
              private toastService: ToastService,
              public popoverController: PopoverController,
              private modalCtrl: ModalController,
              public entrepriseService: EntrepriseService,
              public modelDevis: ModelDevisService,
              private clientService: ClientService,
              public datepipe: DatePipe) { }
  ngOnInit() {
  }
  async ionViewWillEnter() { 
     this.entrepriseService.getForDocument()
      .subscribe( data => { 
        console.log(data);
        this.entreprise.id = data['data'].id;
        this.entreprise.lib = data['data'].lib;
        this.entreprise.email = data['data'].email;
        this.entreprise.adresse = data['data'].adresse;
        this.entreprise.tel = data['data'].tel;
        this.entreprise.IBAN = data['data'].IBAN;
        this.entreprise.nodelDevisId = data['data'].nodelDevisId;
        
        this.date =this.datepipe.transform(new Date(), 'yyyy-MM-dd');
      });
  }
async editNom() {
  const popover = await this.popoverController.create({
    component: NomDevisComponent,
    cssClass: 'popover-content'
    });
    await popover.present();
    const { data : lib } = await popover.onDidDismiss();
    if(lib && lib!= '') {
      console.log(lib)
     this.document.lib = lib
      console.log(this.document.lib)
    }
}

async editClient() {
  const modal = await this.modalCtrl.create({
  component: CoordonneesClientPage,
  componentProps: {clientPourDocument: true}
  });
  await modal.present();
  const { data : client } = await modal.onDidDismiss();
  if(client) {
    console.log(client)
   
if(client.existe) {
  this.client.existe = true
this.client.id = client.id
this.clientService.getForDocument(client.id).subscribe((data) => {
  console.log(data)
  this.client.nom = data['data']['nom'];
  this.client.adresse = data['data']['adresse'];
  this.client.cp = data['data']['cp'];
  this.client.tel = data['data']['tel'];
})
} else {
  this.client.existe = false
  this.client.nom = client.client.nom
  this.client.adresse = client.client.adr
  this.client.cp = client.client.cp
  this.client.tel = client.client.tel
  this.client.type = client.client.type
  this.client.email = client.client.email
  this.client.tel = client.client.tel
  this.client.entreprise_id = client.client.entreprise_id
}
    console.log(this.client)
  }

}

async editTotal() {
  const popover = await this.popoverController.create({
    component:  TotalComponent, 
    componentProps: { 
      totlal_HT : this.document.total_HT, 
      totlal_TTC : this.document.total_TTC, 
      tva : this.document.tva, 
      totla_TVA : this.document.total_TVA
    }
    });
    await popover.present();
    const { data : infos } = await popover.onDidDismiss();
    if (infos) {
      console.log(infos)
     if( this.entreprise.IBAN != infos.IBAN) {
      this.document.IBAN != infos.IBAN
     } else {
       this.document.IBAN = null
     }
     this.document.SWIFT_BIC != infos.SWIFT_BIC

    }
}

async editInfoBancaires() {
  const popover = await this.popoverController.create({
    component: InfoBancairesComponent,
    cssClass: 'popover-content'
    });
    await popover.present();
    const { data : infos } = await popover.onDidDismiss();
    if (infos) {
      console.log(infos)
     if( this.entreprise.IBAN != infos.IBAN) {
      this.document.IBAN = infos.IBAN
     } else {
       this.document.IBAN = null
     }
     if(infos.SWIFT_BIC != '') {
      this.document.SWIFT_BIC = infos.SWIFT_BIC
     }
    
    }
}
deleteIntervention() {
  console.log('toto')
}

async editIntervention() {
 
  const modal = await this.modalCtrl.create({
    component: ProduitPage,
    componentProps: {clientPourDocument: true}
    });
    await modal.present();
    const { data : client } = await modal.onDidDismiss();
  
  
}

async addIntervention() {
 
  const modal = await this.modalCtrl.create({
    component: ProduitPage,
    componentProps: {clientPourDocument: true}
    });
    await modal.present();
    const { data : client } = await modal.onDidDismiss();
  
  
}

async addProduct() {
  const modal = await this.modalCtrl.create({
    component: ProduitPage,
    componentProps: {clientPourDocument: true}
    });
    await modal.present();
    const { data : client } = await modal.onDidDismiss();

  
}


}
