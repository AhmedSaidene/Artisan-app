import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-menue-header',
  templateUrl: './side-menue-header.component.html',
  styleUrls: ['./side-menue-header.component.scss'],
})
export class SideMenueHeaderComponent implements OnInit {
  user = {
    logo : '',
    userName : '',
    entreprise : '',
    role : ''
  };
  constructor(private userService: UserService) {}

  ngOnInit(){
  /**
     this.userService.getUserProfile().subscribe((data) => {
      console.log(data)
      this.user.userName = data['nom'] + ' ' + data['prenom']
      console.log(this.user.userName)
      this.user.logo = data['data']['logo']
      this.user.entreprise = data['entreprise']
      this.user.role = data['role']
    })
   */
     
  }
}