import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterventionService } from 'src/app/services/intervention.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.page.html',
  styleUrls: ['./intervention.page.scss'],
})
export class InterventionPage implements OnInit {

  interventions : any = [];
 added : any []
 hideAdded = false
  devis = {
    client : {},
    intervention : null
  }

  constructor(private router: Router,
              private toastService: ToastService,
              private interventionService: InterventionService) 
              { }

  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state; 
    console.log(this.devis);
  }
  async ionViewWillEnter() { 
    this.interventions = [];

    this.interventionService.getFavorite()
    .subscribe( data => {
      console.log(data);
      this.interventions =  data['data'];
    });
   
    }
  choice(id: number) {
    this.devis.intervention = id;
    console.log(this.devis);
  }
  add() {
    this.hideAdded = true
    this.interventionService.add()
    .subscribe( data => {
      console.log(data);
      this.added =  data['data'];
    });
  }
  submit() {
    if (this.devis.intervention == null){
      this.toastService.presentToast('choisir une intervention !');
    } else {
    console.log(this.devis);
    this.router.navigateByUrl('/home/devis/devis-par-etapes/prestation', { state: { devis : this.devis }});
    }
  }

}
