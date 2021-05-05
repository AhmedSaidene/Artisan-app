import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.page.html',
  styleUrls: ['./prestation.page.scss'],
})
export class PrestationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.router.navigate(['/home/devis/devis-par-etapes/traveaux']);
  }
}
