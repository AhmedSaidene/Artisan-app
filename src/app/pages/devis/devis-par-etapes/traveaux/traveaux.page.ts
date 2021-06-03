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
  constructor(private router: Router,
             private toastService: ToastService,
             private traveauxService: TraveauxService) { }
  ngOnInit() {
    console.log(history.state);
    this.devis.client = history.state.client;
   this.devis.interventions = history.state.interventions; 
   console.log(this.devis);
  }
  async ionViewWillEnter() { 
    this.favourite = [];
    this.traveauxService.get()
    .subscribe( data => {
      console.log(data);
      this.favourite =  data['data'];
    });
    }
    id = {}
    choice(id: number) {
      this.id = id
      console.log(this.id); 
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
    if(this.id == null) {
      this.toastService.presentToast('Choisir un type de traveaux');
    } else {
      this.devis.interventions[history.state.interventions.length - 1]['traveaux'] = this.id
      this.router.navigateByUrl('/home/devis/devis-par-etapes/produit', { state: this.devis });
    } 
  }
}
