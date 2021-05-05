import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveaux',
  templateUrl: './traveaux.page.html',
  styleUrls: ['./traveaux.page.scss'],
})
export class TraveauxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  submit() {
    this.router.navigate(['/home/devis/devis-par-etapes/produit']);
  }
  
}
