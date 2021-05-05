import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.page.html',
  styleUrls: ['./intervention.page.scss'],
})
export class InterventionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.router.navigate(['/home/devis/devis-par-etapes/prestation']);
  }

}
