import { Component } from '@angular/core';
import {SidebarService} from "../../00-services/sidebar/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    sideBarItems = [
        {
        name: "Home",
        path: "/bank/home",
        svg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />'
        },


    ]

    clickEventsubscription:Subscription;

    constructor(private sidebarService: SidebarService) {
        this.clickEventsubscription=this.sidebarService.openSideBar().subscribe(()=>{
            this.sidebarIsHidden= false;
        })
    }
    sidebarIsHidden: boolean= true;
    closeSidebar() {
        this.sidebarIsHidden= true;
    }



}
