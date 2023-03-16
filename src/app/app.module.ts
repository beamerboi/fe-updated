import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './features/landing/landing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {SharedModule} from "./shared/shared.module";
import {BankModule} from "./features/bank/bank.module";
import { BankMainComponent } from './features/bank/02-containers/bank-main/bank-main.component';
import { EnterpriseMainComponent } from './features/bank/02-containers/enterprise-main/enterprise-main.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";


export function kcFactory(ksService : KeycloakService) {

  return ()=>{
    ksService.init({
      config : {
        url: 'http://localhost:8080/',
        realm: 'springBootKeycloak',
        clientId: 'spring-client'
      },
      initOptions : {
        onLoad : "check-sso", checkLoginIframe : true
        //silentCheckSsoRedirectUri:
          //window.location.origin + '/assets/silent-check-sso.html'
      }
    })

  }
}

@NgModule({
  declarations: [
    AppComponent,
    // BankMainComponent,
    // EnterpriseMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LandingModule,
    // BankEmployeeDashboardModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
      SharedModule,
      BankModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {provide : APP_INITIALIZER , 
      deps: [KeycloakService],
      useFactory : kcFactory ,
       multi : true} //multi providers
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
