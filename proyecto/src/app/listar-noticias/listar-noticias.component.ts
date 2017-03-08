import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  title: string = "Bienvenido a noticias";
  noticias = [];
  constructor(private _http: Http,
              private _masterURL: MasterUrlService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Noticias")
      .subscribe(
        (res: Response) => {
          this.noticias = res.json()
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
