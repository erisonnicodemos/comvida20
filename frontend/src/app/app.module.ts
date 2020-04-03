import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProgressBarModule} from "angular-progress-bar"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArrecadacaoComponent } from './shared/arrecadacao/arrecadacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ArrecadacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ProgressBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
