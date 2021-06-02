import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModelDevisService {

  entrepriseId: any;
    constructor( private http: HttpClient,
                 private httpService: HttpService,
                 private storage: StorageService)
                 {
                  this.storage.get('entreprise_id').then((val) => {
                    this.entrepriseId = val;            
                  });
                 }

  get() {
    /*
    this.storage.get('entreprise_id').then((val) => {
      console.log(val);
      this.entrepriseId = val;
      console.log(this.entrepriseId);
    });
    */
    return this.httpService.get('model-devis/entreprise/', this.entrepriseId);
  }                
    
   post(postData: any) {
     console.log(postData)
         return this.http.post(`http://localhost:8000/api/model-devis`,postData);
        }
   
}
