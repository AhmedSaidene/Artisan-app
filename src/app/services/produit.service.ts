import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Produit } from '../models/produit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient,
    private env: EnvService){}

getProduittsByCategorieId(CategorieId:number): Observable<Produit[]> {
return this.http.get<Produit[]>(`${this.env.API_URL}produits/categorie/${CategorieId}`);
}

addProduit(postData: any): Observable<Produit> {
return this.http.post<Produit>(`${this.env.API_URL}produits`,postData);
}

updateProduit(produitId:number, postData: any): Observable<Produit> {
return this.http.put<Produit>(
`${this.env.API_URL}produits/${produitId}`,
postData
);
} 

deleteProduit(produitId: number): Observable<Produit> {
return this.http.delete<Produit>(`${this.env.API_URL}produits/${produitId}`);
}
}
