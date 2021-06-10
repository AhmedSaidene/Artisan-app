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
  //resultats favories
  favourite : any = [];
  //intervention ajouté nom favoris
 added : any []

  prestations : any = [];

  devis = {
    client : {},
    interventions : [],
  }
  intervention : any
  constructor(private router: Router,
              private toastService: ToastService,
              private prestationService: PrestationService) { }
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   this.intervention = history.state.intervention; 
   console.log(this.devis);
     console.log(this.intervention);
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
    this.intervention['prestation']  = id
    console.log(this.intervention);
  }
  submit() {
    console.log(this.devis);
    if(this.intervention['prestation'] == null) {
      this.toastService.presentToast('choisir une prestation');
    } else {
      this.router.navigateByUrl('/home/devis/devis-par-etapes/traveaux', { state:  { client : this.devis.client, interventions: this.devis.interventions, intervention : this.intervention}});
    } 
  }
}