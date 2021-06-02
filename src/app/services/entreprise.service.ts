import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Entreprise } from '../models/entreprise.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EntrepriseService {

 constructor( private http: HttpClient,
              private httpService: HttpService){}
 
post(postData: any) {
      return this.http.post(`http://localhost:8000/api/entreprises`,postData);
     }


}


