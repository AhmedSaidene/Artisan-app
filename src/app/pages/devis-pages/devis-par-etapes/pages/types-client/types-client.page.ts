import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types-client',
  templateUrl: './types-client.page.html',
  styleUrls: ['./types-client.page.scss'],
})
export class TypesClientPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit() {
    this.router.navigate(['/home/devis/devis-par-etapes/coordonnees-client']);
  }
}
