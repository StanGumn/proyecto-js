import { Component, OnInit } from '@angular/core';
import {Http,Response} from "@angular/http";

import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-listar-deporte',
  templateUrl: './listar-deporte.component.html',
  styleUrls: ['./listar-deporte.component.css']
})
export class ListarDeporteComponent implements OnInit {
  title: string = "Deportes";
  deportes = [];
  constructor(private _http: Http,
              private _masterURL: MasterUrlService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Deporte")
      .subscribe(
        (res: Response) => {
          this.deportes = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
