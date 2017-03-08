import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  title: string = "Bienvenido a ingresar noticias";
  private _parametros: any;
  nuevaNoticia = {};
  noticias = [];
  disabledButtons = {
    NuevaNoticiaFormSubmitButton: false
  };
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterUrlService) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url + 'Noticias?idDeporte=' + this._parametros.idDeporte)
          .subscribe(
            (res: Response) => {
              this.noticias = res.json();
            },
            (err) => {
              console.log(err)
            }
          )
      });
  }

}
