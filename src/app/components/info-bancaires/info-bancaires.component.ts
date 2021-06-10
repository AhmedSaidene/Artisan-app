import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-info-bancaires',
  templateUrl: './info-bancaires.component.html',
  styleUrls: ['./info-bancaires.component.scss'],
})
export class InfoBancairesComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  iban = ''
  swift = ''
   ngOnInit() {}
 
   close() {
     console.log('iban' + this.iban + ' , swift : ' + this.swift)
     this.popoverController.dismiss({IBAN :  this.iban , SWIFT_BIC : this.swift })
   }
 
 }
 