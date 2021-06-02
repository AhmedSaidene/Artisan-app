import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  entrepriseId : any;

 constructor( private httpService: HttpService,
              private storage: StorageService)
{
  this.storage.get('entreprise_id').then((val) => {
    this.entrepriseId = val;            
  });
}
get() {
  return this.httpService.get('factures/', this.entrepriseId);
}

}

