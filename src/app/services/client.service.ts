import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

 constructor( private http: HttpClient,
              private env: EnvService){}
 
     getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(`${this.env.API_URL}clients`);
     }

     getClientsByEntrepriseId(entrepriseId:number): Observable<Client[]> {
        return this.http.get<Client[]>(`${this.env.API_URL}clients/entreprise/${entrepriseId}`);
       }

     addClient(postData: any): Observable<Client> {
      return this.http.post<Client>(`${this.env.API_URL}client`,postData);
     }

     updateClient(clientId:number, postData: any): Observable<Client> {
      return this.http.put<Client>(
          `${this.env.API_URL}client/${clientId}`,
          postData
          );
     } 

     deleteClient(clientId: number): Observable<Client> {
        return this.http.delete<Client>(`${this.env.API_URL}client/${clientId}`);
     }
}


