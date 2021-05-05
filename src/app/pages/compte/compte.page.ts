import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['home/acceuil']);
   }

 

}
