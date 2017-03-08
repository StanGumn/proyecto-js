import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-listar-noticias-deporte',
  templateUrl: './listar-noticias-deporte.component.html',
  styleUrls: ['./listar-noticias-deporte.component.css']
})
export class ListarNoticiasDeporteComponent implements OnInit {
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
  crearNoticia(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaNoticiaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Noticias", {
      nombreNoticia: formulario.value.nombreNoticia,
      infoNoticia: formulario.value.infoNoticia,
      fechaCreacion: formulario.value.fechaCreacion,
      idDeporte:this._parametros.idDeporte

    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.noticias.push(res.json());
        this.nuevaNoticia = {};
        this.disabledButtons.NuevaNoticiaFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaNoticiaFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
        console.log("Termino la función vamos a las casa :v")
      }
    );
  }

  borrarNoticia(id: number) {
    this._http.delete(this._masterURL.url + "Materia/" + id)
      .subscribe(
        (res) => {
          let noticiaBorrado = res.json();
          this.noticias = this.noticias.filter(value => noticiaBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarNoticia(noticia: any) {
    let parametos = {
      nombreNoticia: noticia.nombreNoticia,
      infoNoticia: noticia.infoNoticia,
      fechaCreacion: noticia.fechaCreacion,

    };
    this.disabledButtons.NuevaNoticiaFormSubmitButton = true;
    this._http.put(this._masterURL.url + "Noticias/" + noticia.id, parametos)
      .subscribe(
        (res: Response) => {
          noticia.formularioCerrado = !noticia.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }
}
