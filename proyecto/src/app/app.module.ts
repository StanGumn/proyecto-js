import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeporteComponent } from './deporte/deporte.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import {MasterUrlService} from "./services/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    DeporteComponent,
    NoticiasComponent,
    GaleriaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MasterUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
