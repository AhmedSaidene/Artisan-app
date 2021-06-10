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
//resultats favories
  favourite : any = [];
  //intervention ajouté nom favoris
 added : any []
 //a variable to hide add btn if user retreave intevention
 hideAddBtn = false
 //resultat
  devis = {
    client : null,
    interventions : null
  }
  //choix
  intervention = {
id : {},
index : {}
  }
  constructor(private router: Router,
              private toastService: ToastService,
              private interventionService: InterventionService) 
              { }
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client; 
    this.devis.interventions = history.state.interventions; 
    //console.log(this.devis['interventions'].length)
    
    console.log(this.devis);
  }
  async ionViewDidEnter() { 
    console.log(history.state);
    this.devis.client = history.state.client; 
    this.devis.interventions = history.state.interventions; 
    console.log(this.devis['interventions'].length)
    
    console.log(this.devis);
    this.favourite = [];
    this.interventionService.getFavorite()
    .subscribe( data => {
      console.log(data);
      this.favourite =  data['data'];
    });
    }
  choice(id: number) {
    this.intervention['id'] = id;
    console.log(this.intervention); 
  }
  add() {
    this.hideAddBtn = true
    this.interventionService.add()
    .subscribe( data => {
      console.log(data);
      this.added =  data['data'];
    });
  }
  submit() {
    console.log(this.devis); 
    console.log(this.intervention); 
    if (this.intervention.id == null){
      this.toastService.presentToast('choisir une intervention !');
    } else {
     if ( this.devis.interventions.length == 0) {
      this.intervention.index = 0
     } else {
     // console.log(this.devis.interventions[this.devis.interventions.length - 1].index)
      this.intervention['index'] = this.devis.interventions[history.state.interventions.length - 1]['index'] + 1
     }
      console.log(this.intervention);
    console.log(this.devis);
    console.log('after pushing intervention' + this.devis.interventions);
    this.router.navigateByUrl('/home/devis/devis-par-etapes/prestation', 
    { state:  {client : this.devis.client , interventions : this.devis.interventions , intervention : this.intervention}});
    }
  }

}
