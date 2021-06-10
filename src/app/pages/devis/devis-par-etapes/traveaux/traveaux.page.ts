import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { TraveauxService } from 'src/app/services/traveaux.service';
@Component({
  selector: 'app-traveaux',
  templateUrl: './traveaux.page.html',
  styleUrls: ['./traveaux.page.scss'],
})
export class TraveauxPage implements OnInit {
//resultats favories
favourite : any = [];
//intervention ajouté nom favoris
added : any []
//a variable to hide add btn if user retreave intevention
hideAddBtn = false
//resultat
devis = {
  client : {},
  interventions : [],
}
intervention : any
  constructor(private router: Router,
             private toastService: ToastService,
             private traveauxService: TraveauxService) { }
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   this.intervention = history.state.intervention; 
   console.log(this.devis);
     console.log(this.intervention);
  }
  async ionViewWillEnter() { 
    this.favourite = [];
    this.traveauxService.getFavorite()
    .subscribe( data => {
      console.log(data);
      this.favourite =  data['data'];
    });
    }
    choice(id: number) {
      this.intervention['traveaux']  = id 
      console.log(this.intervention);
    }
    add() {
      this.hideAddBtn = true
      this.traveauxService.add()
      .subscribe( data => {
        console.log(data);
        this.added =  data['data'];
      });
    }
  submit() {
    console.log(this.devis);
    if( this.intervention['traveaux'] == null) {
      this.toastService.presentToast('Choisir un type de traveaux');
    } else {
      this.router.navigateByUrl('/home/devis/devis-par-etapes/produit',  { state:  { client : this.devis.client, interventions: this.devis.interventions, intervention : this.intervention}});
    } 
  }
}
