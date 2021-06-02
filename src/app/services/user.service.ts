import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId : any;
  entrepriseId : any;
  constructor(private storage: Storage,
              private httpService: HttpService) {        
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
checkClientByEmail(email: string) {
  return this.httpService.get('clients/user/', email);
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