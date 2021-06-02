import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.page.html',
  styleUrls: ['./interventions.page.scss'],
})
export class InterventionsPage implements OnInit {
  
    interventions : any = [];
    searchItem : any;
    nbr : number;
  
    constructor(
      private interventionService: InterventionService,
      private LoadingCtrl: LoadingController,
      private router: Router) {}
      
    async ionViewWillEnter() { 
      const loading = await this.LoadingCtrl.create({message: 'Loading...'});
      loading.present();
  
      this.interventions = [];
       this.interventionService.get()
        .subscribe( data => { 
          loading.dismiss();
          console.log(data);
          this.interventions =  data['data'];
          this.searchItem = this.interventions;
        });
    }
  
    async ngOnInit() {}
     
    _ionChange(event) {
      console.log(event.detail.value);
      const val = event.target.value;
      this.searchItem = this.interventions;
      if( val && val.trim() != '') {
        this.searchItem = this.searchItem.filter((item: any) => {
          return (item.lib.fr.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  
    addIntervention() {
      this.router.navigateByUrl('/home/parametres/intervention', { state : {role : 'add', entrepriseId: this.interventionService.entrepriseId } });
   
    }
      
    openInterventionDetails(intervention) {
      console.log(intervention);
      this.router.navigateByUrl('/home/parametres/intervention', { state:  {role : 'update', user: intervention }});
   
    }
  
  }
  