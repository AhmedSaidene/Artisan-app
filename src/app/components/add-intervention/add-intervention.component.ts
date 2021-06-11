import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { InterventionService } from 'src/app/services/intervention.service';
import { PrestationService } from 'src/app/services/prestation.service';
import { TraveauxService } from 'src/app/services/traveaux.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss'],
})
export class AddInterventionComponent implements OnInit {

  constructor(  private modalCtrl: ModalController,
    private prestationService: PrestationService,
    private traveauxService: TraveauxService,
    private interventionService: InterventionService,
    private LoadingCtrl: LoadingController) { }

  
prestations : any = [];


favouriteInterventions : any = [];
 addedInterventions : any []
 Interventions : any = [];

favouriteTraveaux : any = [];
 addedTraveaux : any []
 Traveaux : any = [];

 hideAddBtnInterventions = false
 hideAddBtnTraveaux = false


  ngOnInit() {}

  
  async ionViewWillEnter() { 

    this.favouriteTraveaux = [];
    this.traveauxService.getFavorite()
    .subscribe( data => {
      console.log(data);
      this.favouriteTraveaux =  data['data'];
    });

    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();
    this.favouriteInterventions = [];
    this.traveauxService.getFavorite()
    .subscribe( data => {
      console.log(data);
      loading.dismiss();
      this.favouriteInterventions =  data['data'];
    });
    
    this.prestations = [];
    this.traveauxService.getFavorite()
    .subscribe( data => {
      console.log(data);
      this.prestations =  data['data'];
    });
    
    }
    
    intervention = {}

  choiceIntervention(id: number) {
    this.intervention['id'] = id;
    console.log(this.intervention); 
  }
  choicePrestation(id: number) {
    this.intervention['prestation'] = id;
    console.log(this.intervention); 
  }
  choiceTraveaux(id: number) {
    this.intervention['traveaux'] = id;
    console.log(this.intervention); 
  }
    
  addInterventions() {
    this.hideAddBtnInterventions = true
    this.interventionService.add()
    .subscribe( data => {
      console.log(data);
      this.addedInterventions =  data['data'];
    });
  }
  addTraveaux() {
    this.hideAddBtnTraveaux = true
    this.interventionService.add()
    .subscribe( data => {
      console.log(data);
      this.addedTraveaux =  data['data'];
    });
  }
  

  closeModal() {
    this.modalCtrl.dismiss()
  }
  submit() {
    this.modalCtrl.dismiss(this.intervention)
  }
}
