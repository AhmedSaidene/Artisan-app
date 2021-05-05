import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordonnees-client',
  templateUrl: './coordonnees-client.page.html',
  styleUrls: ['./coordonnees-client.page.scss'],
})
export class CoordonneesClientPage implements OnInit {

  
  public postData = {
    nom : "",
    email: "",
    adr: "",
    tel : "",
    entreprise_id : 5
  }

  constructor(private router: Router,
              //private clientService: ClientService
              ) { }

  ngOnInit() {
  }
  submit() {
    this.router.navigate(['/home/devis/devis-par-etapes/intervention']);
  }

}
