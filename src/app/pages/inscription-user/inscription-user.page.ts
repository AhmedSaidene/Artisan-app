import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.page.html',
  styleUrls: ['./inscription-user.page.scss'],
})
export class InscriptionUserPage implements OnInit {
  
  
  public postData = {
    //langue : "",
    nom : "",
    prenom : "",
    email: "",
    password: "",
    tel : "",
    entreprise_id : 5,
    role_id : 1
  }

  constructor(private router: Router,
    private toastService: ToastService,
    private authService: AuthService) { }

  ngOnInit() {
  }
  
    validateInputs() {
      let email = this.postData.email.trim();
      let password = this.postData.password.trim();
  
      return (email.length > 0 && password.length > 0 );
    }
   
async submit() {
 if (this.validateInputs()) {
  this.authService.register(
    //this.postData.langue, 
    this.postData.nom, 
    this.postData.prenom, 
    this.postData.email, 
    this.postData.password, 
    this.postData.tel,
    this.postData.entreprise_id,
    this.postData.role_id,
    );
    this.router.navigate(['/entreprise']);
  } else {
    this.toastService.presentToast('remplir les champs');
    }
      
  }
}