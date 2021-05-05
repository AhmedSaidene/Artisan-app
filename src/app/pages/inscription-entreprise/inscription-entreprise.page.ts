import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Entreprise } from '../../models/entreprise.model';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.page.html',
  styleUrls: ['./inscription-entreprise.page.scss'],
})
export class InscriptionEntreprisePage implements OnInit {

  postData = {
    lib : "",
    email : "",
    adresse : "",
    tel: "",
    logo: "aa"
  }
  
  constructor(private router: Router,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private entrepriseService: EntrepriseService,
    private alertService: AlertService) { }

  ngOnInit() {
   }

 submit() {
    this.entrepriseService.addProduct(this.postData).subscribe(
data => {
console.log(data);
},
error => {
console.log(error);
},
() => {
  this.router.navigate(['/configuration-devis']);
  //console.log(this.postData);
}
);
}
}