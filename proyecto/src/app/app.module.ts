import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeporteComponent } from './deporte/deporte.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    DeporteComponent,
    NoticiasComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
