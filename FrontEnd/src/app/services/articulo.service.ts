import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Articulo } from '../models/Articulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  //* ATRIBUTOS
  private serverUrl = 'https://localhost:44367/';
  private apiURL = 'api/Articulo/';
  private url = this.serverUrl + this.apiURL;
  articulos: Articulo[] = [];
  private actualizarFormulario = new BehaviorSubject<Articulo>({} as any);

  //* CONSTRUCTOR
  constructor(private http: HttpClient) {}

  //* MÉTODOS
  guardarArticuloEnBD(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.url, articulo);
  }

  eliminarArticuloEnBD(id: number | undefined): Observable<Articulo> {
    return this.http.delete<Articulo>(this.url + id);
  }

  obtenerArticulosDeBD() {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        this.articulos = data as Articulo[];
        console.log('Obtuve de BD');
      });
  }

  actualizarArticuloEnBD(
    id: number | undefined,
    articulo: Articulo
  ): Observable<Articulo> {
    return this.http.put<Articulo>(this.url + id, articulo);
  }

  editarArticuloForm(articulo: Articulo) {
    this.actualizarFormulario.next(articulo);
  }

  obtenerTarjetaForm(): Observable<Articulo> {
    return this.actualizarFormulario.asObservable();
  }
}
