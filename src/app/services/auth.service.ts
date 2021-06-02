import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { HttpService } from './http.service';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  domain = 'http://localhost:8000/api/';
  
  token:any;
  userData: any;
  entreprise_id: any;
  user_id: any;

  response: {}
  userId;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router,
    private toastService: ToastService,
    private httpService: HttpService,
    //private Appcomponent: AppComponent
  ) {}

  login(email: String, password: String) {
    return this.http.post(this.domain + 'login',
      {email: email, password: password}
      ).subscribe(data => {
        console.log(data)

      this.storage.set('token', data['token']);
      this.storage.set('entreprise_id', data['data']['entreprise_id']);
      this.storage.set('id', data['data']['id']);

     
      this.storage.set('role', data['data']['role']);
      this.storage.set('nom', data['data']['nom'] + ' ' + data['data']['prenom']);
      
      
      this.router.navigate(['home/acceuil']);

      //this.Appcomponent.setUserValues(data['logo'], data['data']['nom'] + ' ' + data['data']['prenom'], data['entreprise'], data['data']['role']);

     }, error => {
      console.log(error);
    });
  }

  register(
    //langue: String, 
    nom: String, 
    prenom: String, 
    email: String, 
    password: String, 
    tel: String, 
    entreprise_id: number,
    role_id : number
    ) 
    {
    return this.http.post(this.domain + 'register',
    { 
      nom: nom, 
      prenom: prenom, 
      tel: tel, 
      entreprise_id: entreprise_id, 
      email: email, 
      password: password,
      role_id : role_id 
   }
    ).subscribe(data => {

      if ( data['message'] == 'Email donné déja existe') {
       this.toastService.presentToast('Email donné déja existe');
      } else {
      this.storage.set('token', data['token']);
      this.storage.set('entreprise_id', data['data']['entreprise_id']);
      this.storage.set('id', data['data']['id']);      
      }
    }
    );
  }

  logout() {
    this.storage.clear();

    this.router.navigate(['/login']);
  }
}