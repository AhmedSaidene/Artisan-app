import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { StorageService } from './storage.service';
import {Storage} from '@ionic/storage'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  domain = 'http://localhost:8000/api/';
  token : any;
  reqOpts : any;

  constructor(private http: HttpClient,
             private storage: Storage,
              private platform: Platform) 
   { platform.ready().then(() => storage.get('token'))
.then((val) => {     
 this.reqOpts = {
   headers: {
     'Accept': 'application/json',
     'Authorization': 'Bearer ' + val
   },
   params: new HttpParams()
 };
 console.log(this.reqOpts.headers['Authorization']);       
});
}
  post(serviceName: string, data: any){
    const url = this.domain +  serviceName;
    console.log(data);
console.log("http service : post " + url);
    return this.http.post(url, data, this.reqOpts);
  }

  get(serviceName: string, id: any){
const url = this.domain +  serviceName + id;
console.log("http service : get " + url);
     return this.http.get(url, this.reqOpts);
  }

  update(serviceName: string, id: number,data: any){
    const url = this.domain +  serviceName + id;
    console.log(data);
    console.log("http service : update " + url);
    return this.http.put(url,data, this.reqOpts);
  }

  delete(serviceName: string, id: number){
    const url = this.domain +  serviceName + id;
    console.log("http service : delete " + url);
    return this.http.delete(url, this.reqOpts);
  }
}


