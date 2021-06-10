import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})

export class EntrepriseService {
    entrepriseId : any;
 constructor( private http: HttpClient,
              private httpService: HttpService,
              private storage: StorageService)
              {
                this.storage.get('entreprise_id').then((val) => {
                    this.entrepriseId = val;            
                  }); 
                
              }
 
post(postData: any) {
      return this.http.post(`http://localhost:8000/api/entreprises`,postData);
     }
     
     get() {
        return this.httpService.get(`entreprises/`, this.entrepriseId);
       }  
       getForDocument() {
        return this.httpService.get(`entreprises/model/`, this.entrepriseId);
       }  
       checkEntrepriseByEmail(email: string) {
        return this.http.get('http://localhost:8000/api/entreprises/email/'+ email);
      }

}


