import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {
  title: string = "Bienvenido a ingresar Deporte";
  nuevoDeporte = {};
  deportes = [];
  disabledButtons = {
    NuevoDeporteFormSubmitButton: false
  };
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

  crearDeporte(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevoDeporteFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Deporte", {
      nombreDeporte: formulario.value.nombreDeporte
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.deportes.push(res.json());
        this.nuevoDeporte = {};
        this.disabledButtons.NuevoDeporteFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevoDeporteFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
        console.log("Termino la función vamos a las casa :v")
      }
    );
  }

  borrarDeporte(id: number) {
    this._http.delete(this._masterURL.url + "Deporte/" + id)
      .subscribe(
        (res) => {
          let deporteBorrado = res.json();
          this.deportes = this.deportes.filter(value => deporteBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarDeporte(deporte: any) {
    let parametos = {
      nombreDeporte: deporte.nombreDeporte
    };
    this._http.put(this._masterURL.url + "Deporte/" + deporte.id, parametos)
      .subscribe(
        (res: Response) => {
          deporte.formularioCerrado = !deporte.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }

}
