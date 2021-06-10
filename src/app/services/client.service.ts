import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ClientService {

  entrepriseId : any;

 constructor( private httpService: HttpService,
              private storage: StorageService)
              {
                this.storage.get('entreprise_id').then((val) => {
                  this.entrepriseId = val;            
                }); 
              }
          
  get() {
    return this.httpService.get('clients/entreprise/', this.entrepriseId);
  }         

  checkClientByEmail(email: string) {
    return this.httpService.get('clients/email/', email);
  }
  getForDocument(id: number) {
    return this.httpService.get('clients/doc/', id);
  }
  search(nom: string) {
    return this.httpService.get('clients/nom/' + nom + '/', this.entrepriseId);
  }
  
post(postData: any) {
  return this.httpService.post('clients',postData);
 }

}

