import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [ CommonModule,
    AuthService],
  imports: [
    CommonModule,
    AuthService
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModuleModule { }
