import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  

constructor( public securityService:SecurityService, private router: Router ){}

public async ngOnInit() {

}

 login(){
    this.securityService.kcService.login(); 
    
   // {
   // redirectUri : window.location.origin 
       
  //})
  //await this.router.navigate(['/user']);

}

async Signup(){
  await this.securityService.kcService.register()
    //redirectUri : window.location.origin 
  //})

}

  
  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }

  public async getToken() {
  }
}
