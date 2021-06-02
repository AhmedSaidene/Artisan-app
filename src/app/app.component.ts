import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Storage } from '@ionic/storage-angular';
import { LoginPageModule } from './pages/login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {
    logo : {},
    userName : {},
    entreprise : {}
  };
  constructor(private authService: AuthService,
              private userService: UserService) {
    
  }

  ngOnInit(){
    this.userService.getUserInfo().subscribe((data) => {
      console.log(data)
    })
            /*
    this.userService.getUserInfo().subscribe((data) => {

      this.user.nom = data['user']['nom'];
      this.user.img = data['entreprise']['logo'];
      this.user.entreprise = data['entreprise']['lib'];
     })
     */
  }
  /**
   * setUserValues(logo: string, userName: string , entreprise: string) {
    this.user.logo = logo;
    this.user.userName = userName;
    this.user.entreprise =entreprise;
  }
   */

  logout() {
    this.authService.logout();
  }
}
/**
 * public user = {
    logo : {},
    userName : {},
    entreprise : {},
    role : {}
  };
  constructor(private authService: AuthService,
              private userService: UserService) {
    
  }

  ngOnInit(){
            
    this.userService.getUserInfo().subscribe((data) => {

      this.user.nom = data['user']['nom'];
      this.user.img = data['entreprise']['logo'];
      this.user.entreprise = data['entreprise']['lib'];
     })
     
  }


  logout() {
    this.authService.logout();
  }
 */


