import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  role : string;  
  form: FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private toastController: ToastService,
             private loadingCtrl: LoadingController) {  

console.log(this.router.getCurrentNavigation().extras);
}
ngOnInit() {
  this.initAddUserForm();
  this.role = history.state.role;
  console.log(this.role);
    if(this.role == 'update') {
      if(history.state.user) {
        this.form.patchValue({
          nom: history.state.user.nom,
         prenom:  history.state.user.prenom,
         role: history.state.user.role,
          email: history.state.user.email,
          password: history.state.user.password,
          tel: history.state.user.tel,
       //  entrepriseid : history.state.user.entreprise_id
        });
        this.form.updateValueAndValidity();
      }
    }
}


initAddUserForm() {
  this.form = new FormGroup({
     nom: new FormControl(null, [Validators.required]),
    prenom:  new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    // langue: new FormControl(null, [Validators.required]),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
   password:  new FormControl(null, [Validators.required, Validators.minLength(6)]),
    tel: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(8),
      Validators.maxLength(8),
    ])),
    entrepriseId:  new FormControl(this.userService.entrepriseId,[]),
 });
}

async submit(postData: any) {
  console.log(postData)
  const loading = await this.loadingCtrl.create({message: 'Loading...'});
  loading.present();
 
  if(this.role == 'update') {
    this.userService.update(this.form.value).subscribe((res) => {
      loading.dismiss();
      console.log(res)
if(res['success'] == true) {
  this.toastController.presentToast('Modification avec succes');
} else {
  this.toastController.presentToast(res['message']);
}
    })
  } else {
    //il faux tester et ajouter la langue
    this.userService.post(this.form.value).subscribe((res) => {
      console.log(res)
      loading.dismiss();

      if(res['success'] == true) {
        this.toastController.presentToast('Création avec succes');
        this.router.navigate(['/home/parametres/comptes']);
      } else {
        this.toastController.presentToast(res['message']);
      }
    })
  }
}


delete() {
  this.userService.delete()
  .subscribe( data => {
    if(data['success'] == true) {
      console.log(data);
      this.toastController.presentToast("your product was deleted ! ");
    } else {
     this.toastController.presentToast("Une erreur s'est produite !");
    }
  });
}
}
