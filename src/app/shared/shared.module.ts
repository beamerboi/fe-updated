import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './01-components/sidebar/sidebar.component';
import { NavbarComponent } from './01-components/navbar/navbar.component';
import { DropdownComponent } from './01-components/dropdown/dropdown.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DropdownComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
  exports: [
      SidebarComponent,
      NavbarComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
