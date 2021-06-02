import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-types-client',
  templateUrl: './types-client.page.html',
  styleUrls: ['./types-client.page.scss'],
})
export class TypesClientPage implements OnInit {

  typeClient  = "";

  devis = {
    client : {
      typeClient : {}
    }
  }


  constructor(private router:Router,
              private toastService : ToastService) { }

  ngOnInit() {
  }

  choice(c: string) {
    this.typeClient = c;
    console.log(this.typeClient);
  }

  submit() {
    if(this.typeClient == "") {
      this.toastService.presentToast('Il faut choisir un client');
    } else {
     // this.router.navigate(['/home/devis/devis-par-etapes/coordonnees-client']);
     this.devis.client.typeClient = this.typeClient;
     console.log(this.devis);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/coordonnees-client', { state: { devis : this.devis }});
    } 
  }
}
