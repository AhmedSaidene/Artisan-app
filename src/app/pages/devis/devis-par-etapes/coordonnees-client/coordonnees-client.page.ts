import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
//import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-coordonnees-client',
  templateUrl: './coordonnees-client.page.html',
  styleUrls: ['./coordonnees-client.page.scss'],
})
export class CoordonneesClientPage implements OnInit {

  @Input() clientPourDocument;

  form: FormGroup;
  detailsForm;
  entrepriseId;

  
   // client : {}
    clientId : {}
    user={}
  

  typeClient  = "";
  clientExiste  : {};

  constructor(private router: Router,
              private storage: StorageService,
              private clientService: ClientService,
              private LoadingCtrl: LoadingController,
              private toastService: ToastService,
              private modalCtrl: ModalController) 
              {
                this.storage.get('entreprise_id').then((val) => {
                  this.entrepriseId = val;            
                });
              }
              ngOnInit() {
                this.initAddUserForm();
               // console.log(this.client)
                console.log(this.clientPourDocument)
                if(this.clientPourDocument != undefined) {

                }
              }
              
              initAddUserForm() {
                this.form = new FormGroup({
                   nom: new FormControl(null, [Validators.required]),
                   cp: new FormControl(null, [ Validators.pattern('[0-9]*')]),
                  type: new FormControl(null, [Validators.required]),
                  adr: new FormControl(null, [Validators.required]),
                  email: new FormControl(null, Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                  tel: new FormControl(null, Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]*'),
                    Validators.minLength(8),
                    Validators.maxLength(8),
                  ])),
                  entrepriseId:  new FormControl(this.entrepriseId,[]),
               });
              }            
          
  _clientExiste(c: boolean) {
    this.clientExiste = c;
    console.log(this.clientExiste);

    if(c == true) { this.getClients() }
  }

choisirClient(client) {
  this.clientId = client.id;
  console.log(this.clientExiste + ' ' + this.clientId)
}

//liste clients
clients: any = [];
searchItem : any;

async getClients() { 
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

  submit() {
   console.log( this.clientExiste +' ' + this.form.value +'' + this.clientId)

    if(this.clientExiste){
      console.log(this.clientExiste);
      console.log(this.clientId);
      console.log(this.form.value)
      
if(this.clientPourDocument){
  
  this.modalCtrl.dismiss({
          existe : this.clientExiste, 
          id :  this.clientId
     })
}
    else {
     // console.log(this.client);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/intervention', { state:  {client : {
        existe : this.clientExiste, 
        client :  this.clientId
         }, 
interventions : []
        }});
    } } else {
    if( !this.clientExiste ) {
      if(this.clientPourDocument){
        this.modalCtrl.dismiss({
                existe : this.clientExiste, 
                client :  this.form.value
           })
      } else {
        this.clientService.checkClientByEmail(this.form.value.email).subscribe((res) => {
          console.log(res);
          if (res['exist'] == true) {
             this.toastService.presentToast('Un client avec cet email existe déja !');
          } else {
      //  console.log(this.postData);
      //  this.client = this.postData;
       // console.log(this.client);
       console.log(this.clientExiste);
       console.log(this.clientId);
       console.log(this.form.value)
        this.router.navigateByUrl('/home/devis/devis-par-etapes/intervention', { state: {client : {
                                                                                                     existe : this.clientExiste, 
                                                                                                     client : this.form.value 
                                                                                                    }, 
                                                                                        interventions : []
                                                                                                  }});
          }
        })
      
      }
  } else {
      this.toastService.presentToast('Selectionnez ou ajouter un client !');
    }
  }
  }

  closeModal() {
    this.modalCtrl.dismiss(null)
  }

}
