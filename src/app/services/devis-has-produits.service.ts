import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DevisHasProduitsService {

  constructor(private httpService: HttpService) { }

  post(postData: any) {
    return this.httpService.post('devis-produits',postData);
   }
}
