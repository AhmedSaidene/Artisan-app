import { Component, OnInit } from '@angular/core';
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

  form: FormGroup;
  detailsForm;
  entrepriseId;

 postData = {
    nom : "",
    email: "",
    adr: "",
    tel : "",
    entrepriseId : {}
  }
  
    client : {}
    clientId : {}
    user={}
  

  typeClient  = "";
  clientExiste  : {};

  constructor(private router: Router,
              private storage: StorageService,
              private clientService: ClientService,
              private LoadingCtrl: LoadingController,
              private toastService: ToastService) 
              {
                this.storage.get('entreprise_id').then((val) => {
                  this.postData.entrepriseId = val;            
                });
              }
              ngOnInit() {
                this.initAddUserForm();
              /* this.form.patchValue({
                  nom: history.state.user.nom,
                 prenom:  history.state.user.prenom,
                 role: history.state.user.role,
                  email: history.state.user.email,
                  password: history.state.user.password,
                  tel: history.state.user.tel,
               //  entrepriseid : history.state.user.entreprise_id
                });
               */
              }
              
              initAddUserForm() {
                this.form = new FormGroup({
                   nom: new FormControl(null, [Validators.required]),
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
  isValidate() {
   /** return (this.postData.nom !== ""
         && this.postData.tel.i
         && this.postData.nom !== ""
         && this.postData.nom !== ""
         && this.postData.nom !== "") */
         return true
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

    if(this.clientExiste && this.clientId !== undefined ){
     // console.log(this.clientExiste + ' ' + this.clientId)
      this.router.navigateByUrl('/home/devis/devis-par-etapes/intervention', { state:  {client : {
                                                                                                           existe : this.clientExiste, 
                                                                                                           client :  this.clientId
                                                                                                           }, 
                                                                                                     interventions : []
                                                                                                  }});
    } else {
    if( !this.clientExiste && this.isValidate() ) {
      this.clientService.checkClientByEmail(this.form.value.email).subscribe((res) => {
        console.log(res);
        if (res['exist'] == true) {
           this.toastService.presentToast('Un client avec cet email existe déja !');
        } else {
      console.log(this.postData);
      this.client = this.postData;
      console.log(this.client);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/intervention', { state: {client : {
                                                                                                   existe : this.clientExiste, 
                                                                                                   client : this.form.value 
                                                                                                  }, 
                                                                                                  interventions : []
                                                                                                }});
        }
      })
    } else {
      this.toastService.presentToast('Selectionnez ou ajouter un client !');
    }
  }
  }

}
