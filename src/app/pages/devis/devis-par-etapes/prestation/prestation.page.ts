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
  constructor(private router: Router,
              private toastService: ToastService,
              private prestationService: PrestationService) { }
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   console.log(this.devis);
  }
  async ionViewWillEnter() { 
    this.prestations = [];
    this.prestationService.get()
    .subscribe( data => {
      console.log(data);
      this.prestations =  data['data'];
    });
    }
    id = {}
  choice(id: number) {
    this.id = id
    console.log(this.id); 
  }
  submit() {
    if(this.id == null) {
      this.toastService.presentToast('choisir une prestation');
    } else {
     this.devis.interventions[history.state.interventions.length - 1]['prestation'] = this.id
      console.log(this.devis +' ' +  this.devis.interventions[history.state.interventions.length - 1]);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/traveaux', { state:  this.devis});
    } 
  }
}