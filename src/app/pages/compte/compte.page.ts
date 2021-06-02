import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {


  form: FormGroup;
  userDetailsForm;
  constructor(private userService: UserService,
              private toastController: ToastService,
              private toastService: ToastService,
             private loadingCtrl: LoadingController,) {  
}
ngOnInit() {
  this.initUserForm()
}

initUserForm() {
  this.form = new FormGroup({
     nom: new FormControl(null, [Validators.required]),
    prenom:  new FormControl(null, [Validators.required]),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
   password:  new FormControl(null, [Validators.required]),
    tel: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(8),
      Validators.maxLength(8),
    ])),
    entreprise_id:  new FormControl(this.userService.entrepriseId),
 });
}

   
async ionViewWillEnter() { 
  this.initUserForm();

  this.userService.getUserInfo()
  .subscribe( data => { 
    console.log(data);
   this.form.patchValue({
    nom: data['user']['nom'],
   prenom:  data['user']['prenom'],
    email: data['user']['email'],
    //password: data['user']['password'],
    tel: data['user']['tel'],
  });
  
  this.form.updateValueAndValidity();
  });
}

async submit(postData: any) {
  console.log(postData)
  const loading = await this.loadingCtrl.create({message: 'Loading...'});
  loading.present();
 
  this.userService.update(this.form.value).subscribe((res) => {
    loading.dismiss();
    console.log(res)
if(res['success'] == true) {
this.toastController.presentToast('Modification avec succes');
} else {
this.toastController.presentToast(res['message']);
}
  })
}

}

