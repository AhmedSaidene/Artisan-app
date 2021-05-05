import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';

import { AuthService } from './../../services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
/*
import { StorageService } from './../../services/storage.service';

import { AuthConstants } from './../../config/auth-constants';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    email: "",
    password: ""
  }

  constructor(private router: Router,
    private alertService: AlertService,
    private toastService: ToastService,
    private authService: AuthService,/*
    private storageService: StorageService */) { }

  ngOnInit() {
  }

  validateInputs() {
    let email = this.postData.email.trim();
    let password = this.postData.password.trim();

    return (email.length > 0 && password.length > 0 );
  }

  loginAction() {
    if (this.validateInputs()) {
    this.authService.login(this.postData.email, this.postData.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In " + data);
      },
      error => {
        console.log(error);
      },
      () => {
      this.router.navigate(['/home/acceuil']);
      console.log(this.postData);
      }
    );
    
    } else {
      this.toastService.presentToast('Il faux remplir les deux champs');
      }
  }

  navigateToInscription() {
    this.router.navigate(['/user']);
  }
}