import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.page.html',
  styleUrls: ['./inscription-entreprise.page.scss'],
})
export class InscriptionEntreprisePage implements OnInit {

  
  form: FormGroup;
  user;
  
  constructor(private router: Router,
              private entrepriseService: EntrepriseService,
              private toastServices: ToastService) { }

  ngOnInit() {
    console.log(history.state)
    this.initForm();
   }

   
   initForm() {
  this.form = new FormGroup({
     lib: new FormControl(null, [Validators.required]),
    adresse:  new FormControl(null, [Validators.required]),
   logo: new FormControl(null, []),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    tel: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(8),
      Validators.maxLength(8),
    ]))
 });
}
   

 submit() {
  console.log(this.form.value);

  this.entrepriseService.checkEntrepriseByEmail(this.form.value.email).subscribe((data) => {
    if(data['exist'] == true) {
      this.toastServices.presentToast('Une entreprise avec cet email existe déja !')
    } else {
      this.router.navigateByUrl('/configuration-devis', { state : {entreprise :this.form.value, user : history.state} });
    }
  })
  }}