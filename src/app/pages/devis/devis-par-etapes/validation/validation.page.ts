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

  devis = {}

  constructor(private router: Router,
              private devisService: DevisService,
              private LoadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log(history.state.devis);
    this.devis = history.state.devis; 
    console.log(this.devis);
  }

 async submit() {
     console.log(this.devis);
   
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.devisService.post(this.devis);
    loading.dismiss();
  }

}
