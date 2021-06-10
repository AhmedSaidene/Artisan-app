import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId : any;
  entrepriseId : any;
  constructor(private storage: Storage,
              private httpService: HttpService,
              private http: HttpClient) {
                        
  this.storage.get('entreprise_id').then((val) => {
    
    console.log(val)
    this.entrepriseId = val;
    console.log(this.entrepriseId)             
  }); 
  this.storage.get('id').then((val) => {
    console.log(val)
    this.userId = val;
    console.log(this.userId)             
  }); 
}

getUserInfo() {
  return this.httpService.get('user/', this.userId);
}
getUserProfile() {
  return this.httpService.get('user/profile/', this.userId);
}
checkClientByEmail(email: string) {
  return this.http.get('http://localhost:8000/api/user/email/'+ email);
}
get() {
  return this.httpService.get('user/entreprise/', this.entrepriseId);
}
post(postData: any) {
  return this.httpService.post('user',postData);
 }
update(postData: any) {
  return this.httpService.update('user/', this.userId, postData);
}
delete() {
  return this.httpService.delete('user/', this.userId);
}
 
}