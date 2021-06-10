import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Storage } from '@ionic/storage-angular';
import { LoginPageModule } from './pages/login/login.module';

import {SideMenueHeaderComponent} from '../app/components/side-menue-header/side-menue-header.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {
    logo : '',
    userName : '',
    entreprise : '',
    role : ''
  };
  constructor(private authService: AuthService) {}

  ngOnInit(){}

  setUserValues(logo: string, userName: string , entreprise: string, role : string) {
    this.user.logo = logo;
    this.user.userName = userName;
    this.user.entreprise =entreprise;
    this.user.role = role;
  }
   

  logout() {
    this.authService.logout();
  }
}


