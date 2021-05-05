import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.page.html',
  styleUrls: ['./devis.page.scss'],
})
export class DevisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHomePage() {
    this.router.navigate(['home/acceuil']);
   }
}
