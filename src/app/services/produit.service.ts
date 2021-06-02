import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Produit } from '../models/produit.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  categorieId : any;
  produits : any;

  constructor( private httpService: HttpService,
               private storage: StorageService){}

get(idCategorie: string) {
    console.log("id " + idCategorie);
  
  return this.httpService.get('produits/categorie/', idCategorie);
}   

update(produitId: number, postData: any) {
  return this.httpService.update('produits/', produitId, postData);
}

delete(produitId: number) {
  return this.httpService.delete('produits/', produitId);
}
 
/*
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
}*/
}
