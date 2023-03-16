import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ServicecardComponent } from './servicecard/servicecard.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    declarations:
        [

            FooterComponent,
            HomeComponent,
            NavbarComponent,
            CardComponent,
            ServicecardComponent,
        ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatCardModule, MatGridListModule, MatMenuModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        NavbarComponent
    ]
})
export class LandingModule { }
