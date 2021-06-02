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

  traveaux : any = [];
 
  devis = {
    client : {},
    intervention : {},
    prestation : {},
    traveaux : null
  }
  constructor(private router: Router,
    private toastService: ToastService,
    private traveauxService: TraveauxService) { }
    


  ngOnInit() {
    console.log(history.state.devis);
    this.devis.client = history.state.devis.client; 
    this.devis.intervention = history.state.devis.intervention; 
    this.devis.prestation = history.state.devis.prestation; 
    
    console.log(history.state.devis);
  }
  async ionViewWillEnter() { 
    this.traveaux = [];

    this.traveauxService.get()
    .subscribe( data => {
      console.log(data);
      this.traveaux =  data['data'];
    });
   
    }
  choice(id: number) {
    this.devis.traveaux = id;
    console.log(this.devis.traveaux);
  }

  submit() {
    if(this.devis.traveaux == null) {
      this.toastService.presentToast('Choisir un type des traveaux');
    } else {
     console.log(this.devis);
      this.router.navigateByUrl('/home/devis/devis-par-etapes/produit', { state: { devis : this.devis }});
    } 
  }
  
}
