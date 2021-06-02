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
import { ToastService } from 'src/app/services/toast.service';

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
    private entrepriseService: EntrepriseService,
    private toastServices: ToastService) { }

  ngOnInit() {
   }

 submit() {
    this.entrepriseService.post(this.postData).subscribe(
data => {
console.log(data);
},
error => {
console.log(error);
},
() => {
  this.router.navigate(['/configuration-devis']);
  console.log(this.postData);
}
);
}
}