import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ModelDevisService } from 'src/app/services/model-devis.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.page.html',
  styleUrls: ['./inscription-user.page.scss'],
})
export class InscriptionUserPage implements OnInit {
  
  
  form: FormGroup;
  
  
  constructor(private router: Router,
              private entrepriseService: EntrepriseService,
              private authService: AuthService,
              private modelDevis: ModelDevisService,
              private toastServices: ToastService,
              private userService: UserService) { }

  ngOnInit() {
    this.initForm();
   }

   
initForm() {
  this.form = new FormGroup({
     nom: new FormControl(null, [Validators.required]),
    prenom:  new FormControl(null, [Validators.required]),
   // langue: new FormControl(null, [Validators.required]),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
   password:  new FormControl(null, [Validators.required, Validators.minLength(6)]),
    tel: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(8),
      Validators.maxLength(8),
    ])),
    role:  new FormControl('admin',[]),
    entrepriseId:  new FormControl(null,[]),
 });
}
   
 submit() {
  console.log(this.form.value);

  this.userService.checkClientByEmail(this.form.value.email).subscribe((data) => {
    if(data['exist'] == true) {
      this.toastServices.presentToast('Un utilisateur avec cet email existe déja !')
    } else {
      this.router.navigateByUrl('/entreprise', { state : this.form.value });
    }
  })
  }}