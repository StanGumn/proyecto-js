import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {DeporteComponent} from "./deporte/deporte.component";
import {NoticiasComponent} from "./noticias/noticias.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'deporte', component: DeporteComponent},
  //{path: 'noticia/:idGrupo/materia', component: MateriaComponent},
  {path: 'noticias', component: NoticiasComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
