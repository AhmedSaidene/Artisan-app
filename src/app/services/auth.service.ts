import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { HttpService } from './http.service';
import { ToastController } from '@ionic/angular';


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
      this.storage.set('entreprise_id', data['entreprise_id']);
      this.storage.set('id', data['id']);

      
      this.router.navigate(['home/acceuil']);

        }, error => {
      console.log(error);
    });
  }

  register(user: any) 
    {
    return this.http.post(this.domain + 'register',user);
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
  }
}