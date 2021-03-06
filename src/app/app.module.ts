import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Injectable } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { RouterModule } from '@angular/router';
import { ProgressBarModule } from "angular-progress-bar"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArrecadacaoComponent } from './shared/components/arrecadacao/arrecadacao.component';
import { AdicionarArrecadacaoComponent } from './paginas/adicionar-arrecadacao/adicionar-arrecadacao.component';

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

registerLocaleData(localePt, 'pt');


@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}

import { NgxGalleryModule } from 'ngx-gallery-9';
import { registerLocaleData } from '@angular/common';
import { ParceirosComponent } from './shared/components/parceiros/parceiros.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GaleriaComponent } from './shared/components/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ArrecadacaoComponent,
    AdicionarArrecadacaoComponent,
    ParceirosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ProgressBarModule,
    FormsModule,
    HttpClientModule,
    NgxGalleryModule,
    NgbModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
