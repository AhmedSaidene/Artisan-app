import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  categorieId : any;
  produits : any;
  entrepriseId;

  constructor( private httpService: HttpService,
               private storage: StorageService){
                this.storage.get('entreprise_id').then((val) => {
                  this.entrepriseId = val;            
                }); 
               }

get(idCategorie: string) {
    console.log("id " + idCategorie);
  
  return this.httpService.get('produits/categorie/', idCategorie);
}   

update(produitId: number, postData: any) {
  return this.httpService.update('produits/', produitId, postData);
}


post(postData: any) {
  return this.httpService.post('produits/', postData);
}

delete(produitId: number) {
  return this.httpService.delete('produits/', produitId);
}
}
