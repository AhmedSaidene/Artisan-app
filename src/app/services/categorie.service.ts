import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Categorie } from '../models/categorie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor( private http: HttpClient,
    private env: EnvService){}

getCategoriesByEntrepriseId(entrepriseId:number): Observable<Categorie[]> {
return this.http.get<Categorie[]>(`${this.env.API_URL}categories/entreprise/${entrepriseId}`);
}

addCategorie(postData: any): Observable<Categorie> {
return this.http.post<Categorie>(`${this.env.API_URL}categories`,postData);
}

updateCategorie(CategorieId:number, postData: any): Observable<Categorie> {
return this.http.put<Categorie>(
`${this.env.API_URL}categories/${CategorieId}`,
postData
);
} 

deleteCategorie(CategorieId: number): Observable<Categorie> {
return this.http.delete<Categorie>(`${this.env.API_URL}categories/${CategorieId}`);
}
}