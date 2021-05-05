import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.page.html',
  styleUrls: ['./inscription-user.page.scss'],
})
export class InscriptionUserPage implements OnInit {
  
  @Input() user: User;
  
  public postData = {
    langue : "",
    nom : "",
    prenom : "",
    email: "",
    password: "",
    tel : "",
    entreprise_id : 5,
    role_id : 1
  }

  constructor(private router: Router,
              private userService: UserService,
              private loadingCtrl: LoadingController,
              private modalController: ModalController,
              private authService: AuthService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

async submit() {

    this.authService.register(
              //this.postData.langue, 
              this.postData.nom, 
              this.postData.prenom, 
              this.postData.email, 
              this.postData.password, 
              this.postData.tel,
              this.postData.entreprise_id,
              this.postData.role_id,
              ).subscribe(
      data => {
        console.log(data);
        this.authService.login(this.postData.email, this.postData.password).subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          },
          () => {
            this.router.navigate(['/entreprise']);
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }
}