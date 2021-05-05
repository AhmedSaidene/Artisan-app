import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  //token:any;

  constructor(
    private http: HttpClient,
   // private storage: NativeStorage,
    private env: EnvService,
    private storage: StorageService,
    private router: Router
  ) { }

  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + 'login',
      {email: email, password: password}
    ).pipe(
      tap(data => {
        this.storage.set('token', data.token)
        //this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored, :' + this.token);
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
        }));
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
    return this.http.post(this.env.API_URL + 'register',
    { 
      nom: nom, 
      prenom: prenom, 
      tel: tel, 
      entreprise_id: entreprise_id, 
      email: email, 
      password: password,
      role_id : role_id 
   }
    )
  }

  logout() {
    this.storage.remove("token");
    this.router.navigate(['/login']);
    /*
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );*/
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}