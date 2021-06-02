import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Categorie } from '../models/categorie.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  entrepriseId : any;
  categories : any;

  constructor( private httpService: HttpService,
               private storage: StorageService)
    {
      this.storage.get('entreprise_id').then((val) => {
        this.entrepriseId = val;            
      });
    }

    get() { 
      this.storage.get('entreprise_id').then((val) => {
        console.log(val);
        this.entrepriseId = val;
        console.log(this.entrepriseId);
      });
      return this.httpService.get('categories/entreprise/', this.entrepriseId);
    }     
    
    search(lib: string) { 
      this.storage.get('entreprise_id').then((val) => {
        console.log(val);
        this.entrepriseId = val;
        console.log(this.entrepriseId);
      });
      return this.httpService.get('categories/produits/' + lib + '/', this.entrepriseId);
    }  
}