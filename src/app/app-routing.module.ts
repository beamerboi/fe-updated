import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/landing/home/home.component';
import {DashboardComponent} from "./features/bank/02-containers/dashboard/dashboard.component";
import {BankMainComponent} from "./features/bank/02-containers/bank-main/bank-main.component";
import {EnterpriseMainComponent} from "./features/bank/02-containers/enterprise-main/enterprise-main.component";
import {AuthGuard} from "./core/KeycloakAuthGuard/auth.guard";
import {EntrepriseEditComponent} from "./features/bank/01-components/entreprise-edit/entreprise-edit.component";
import {EntrepriseAddComponent} from "./features/bank/01-components/entreprise-add/entreprise-add.component";
import {EntrepriseViewComponent} from "./features/bank/02-containers/entreprise-view/entreprise-view.component";

const routes: Routes = [
  
  { path: '', component: HomeComponent },

 // { path: 'user', loadChildren : () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
  // canActivate : [AuthGuard] ,
 //  data : { roles : ['CUSTOMER']}
 // },
  { path: 'bank', component: DashboardComponent, children: [
      {
        path:'home',
        component: BankMainComponent,

      },
      {
        path:'enterprises',
        component: EntrepriseViewComponent,
          children: [
              {
                  path: 'edit',
                  component: EntrepriseEditComponent
              },
              {
                  path: 'add',
                  component: EntrepriseAddComponent
              },
              {
                  path:'',
                  component: EnterpriseMainComponent
              }
          ]
      },
    ]},
    {path:'bank/enterprises/add', component: EntrepriseAddComponent},
  { path: 'bibi', component: DashboardComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)
    //, {
   // initialNavigation : 'enabledNonBlocking',
   // preloadingStrategy: PreloadAllModules
  //})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
