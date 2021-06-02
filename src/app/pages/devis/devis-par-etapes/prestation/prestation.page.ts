import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestationService } from 'src/app/services/prestation.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.page.html',
  styleUrls: ['./prestation.page.scss'],
})
export class PrestationPage implements OnInit {

  prestations : any = [];

  devis = {
    client : {},
    intervention : {},
    prestation : null
  }

  constructor(private router: Router,
              private toastService: ToastService,
              private prestationService: PrestationService) { }

  ngOnInit() {
    console.log(history.state.devis);
    this.devis.client = history.state.devis.client; 
    this.devis.intervention = history.state.devis.intervention; 
    
    console.log(this.devis.client);
  }

  async ionViewWillEnter() { 
    this.prestations = [];

    this.prestationService.get()
    .subscribe( data => {
      console.log(data);
      this.prestations =  data['data'];
    });
   
    }
  
  choice(id: number) {
    this.devis.prestation = id;
    console.log(this.devis.prestation);
  }

  submit() {
    if(this.devis.prestation == null) {
      this.toastService.presentToast('choisir une prestation');
    } else {
      console.log(this.devis);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/traveaux', { state: { devis : this.devis }});
    } 
  }

}