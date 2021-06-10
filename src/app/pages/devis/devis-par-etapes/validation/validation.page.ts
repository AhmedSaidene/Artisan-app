import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  devis = {
    client : {},
    interventions : null,
  }
  intervention : any

  constructor(private router: Router,
              private devisService: DevisService,
              private LoadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   this.intervention = history.state.intervention; 
   console.log(this.devis);
   console.log(this.intervention);
  }

  submit() {
     console.log(this.devis);
   

    this.devisService.create(this.devis);
    
  }
  
  addIntervention() {
    this.router.navigateByUrl('/home/devis/devis-par-etapes/intervention', { state:  { client : history.state.client, interventions: this.devis.interventions} });
  }

}
