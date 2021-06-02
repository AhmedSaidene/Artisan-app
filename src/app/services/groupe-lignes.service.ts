import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GroupeLignesService {

  constructor(private httpService: HttpService) { }

  post(postData: any) {
    return this.httpService.post('groupe-lignes',postData);
   }

  
}
