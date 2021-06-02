import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';

import { AuthService } from './../../services/auth.service';

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
    private toastService: ToastService,
    private authService: AuthService/*
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
      
    this.authService.login(this.postData.email, this.postData.password);
    
    } else {
      this.toastService.presentToast('Il faux remplir les deux champs');
      }
  }

  navigateToInscription() {
    this.router.navigate(['/user']);
  }
}