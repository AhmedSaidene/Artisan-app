import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Entreprise } from '../models/entreprise.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EntrepriseService {

 constructor( private http: HttpClient,
              private env: EnvService){}
 
     getEntreprise(): Observable<Entreprise[]> {
      return this.http.get<Entreprise[]>(`${this.env.API_URL}entreprises`);
     }

     addProduct(postData: any): Observable<Entreprise> {
      return this.http.post<Entreprise>(`${this.env.API_URL}entreprises`,postData);
     }

     updateProduct(entrepriseId:number, postData: any): Observable<Entreprise> {
      return this.http.put<Entreprise>(
          `${this.env.API_URL}entreprises/${entrepriseId}`,
          postData
          );
     } 

     deleteProduct(entrepriseId: number): Observable<Entreprise> {
        return this.http.delete<Entreprise>(`${this.env.API_URL}entreprises/${entrepriseId}`);
     }
}


