import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {

  users : any = [];
  searchItem : any;
  nbr : number;

  constructor(
    private userService: UserService,
    private LoadingCtrl: LoadingController,
    private router: Router ) {}
    
  async ionViewWillEnter() { 
    const loading = await this.LoadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.users = [];
     this.userService.get()
      .subscribe( data => { 
        loading.dismiss();
        console.log(data);
        this.users =  data['data'];
        this.searchItem = this.users;
      });
  }

  async ngOnInit() {}
   
  _ionChange(event) {
    console.log(event.detail.value);
    const val = event.target.value;
    this.searchItem = this.users;
    if( val && val.trim() != '') {
      this.searchItem = this.searchItem.filter((item: any) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addUser() {
    this.router.navigateByUrl('/home/parametres/compte', { state : {role : 'add', entrepriseId: this.userService.entrepriseId } });
 
  }
    
  openUserDetails(user) {
    console.log(user);
    this.router.navigateByUrl('/home/parametres/compte', { state:  {role : 'update', user: user }});
 
  }

}
