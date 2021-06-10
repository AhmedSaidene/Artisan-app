import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  

  categories: any = [];

  constructor(
    private categorieService: CategorieService,
    private LoadingCtrl: LoadingController
    ) { }

    async ngOnInit() {
    }
    async ionViewWillEnter() { 
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();
    this.categories = [];

    this.categorieService.get()
    .subscribe( data => { 
      loading.dismiss();
      console.log(data);
      this.categories =  data['data'];
    });
   
    }


  showProducts(id: number,lib: string) {
    console.log(id + " " + lib);
  }

 }