import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from '../app/services/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

import {SideMenueHeaderComponent} from '../app/components/side-menue-header/side-menue-header.component';


@NgModule({
  declarations: [AppComponent, 
    SideMenueHeaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule ,StorageService,  ReactiveFormsModule
  ],
bootstrap: [AppComponent],
})
export class AppModule {}
