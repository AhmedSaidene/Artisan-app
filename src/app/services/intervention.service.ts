import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  
  entrepriseId : any;

 constructor( private httpService: HttpService,
              private storage: StorageService)
              {
                this.storage.get('entreprise_id').then((val) => {
                  this.entrepriseId = val;            
                });
              }
  
              
  get() {
    return this.httpService.get('interventions/entreprise/', this.entrepriseId);
  } 
  getFavorite() {
    return this.httpService.get('interventions/entreprise/favourite/', this.entrepriseId);
  } 
  add() {
    return this.httpService.get('interventions/entreprise/add/', this.entrepriseId);
  } 
  delete(id: any) {
    return this.httpService.delete('interventions/', id);
  }
}
