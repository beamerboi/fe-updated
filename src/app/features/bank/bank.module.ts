import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './02-containers/dashboard/dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import { GeneralComponent } from './02-containers/general/general.component';
import { SepecifComponent } from './02-containers/sepecif/sepecif.component';
import {BankMainComponent} from "./02-containers/bank-main/bank-main.component";
import {EnterpriseMainComponent} from "./02-containers/enterprise-main/enterprise-main.component";
import {PaginationComponent} from "./01-components/pagination/pagination.component";
import {DeleteConfirmationComponent} from "./01-components/delete-confirmation/delete-confirmation.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { EntrepriseEditComponent } from './01-components/entreprise-edit/entreprise-edit.component';
import { EntrepriseAddComponent } from './01-components/entreprise-add/entreprise-add.component';
import { EntrepriseViewComponent } from './02-containers/entreprise-view/entreprise-view.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DashboardComponent,
    GeneralComponent,
    SepecifComponent,
    BankMainComponent,
    EnterpriseMainComponent,
    PaginationComponent,
    DeleteConfirmationComponent,
    EntrepriseEditComponent,
    EntrepriseAddComponent,
    EntrepriseViewComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterOutlet,
        RouterLink,
        HttpClientModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        FormsModule
    ]
})
export class BankModule { }
