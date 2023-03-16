import { Component } from '@angular/core';
import {SidebarService} from "../../00-services/sidebar/sidebar.service";

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sidebarService: SidebarService) {
  }

  openSidebar(){
    this.sidebarService.sendClickEvent();
  }
}
