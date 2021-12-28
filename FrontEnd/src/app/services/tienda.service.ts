import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../models/Tienda';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  //* ATRIBUTOS
  private serverUrl = 'https://localhost:44367/';
  private apiURL = 'api/Tienda/';
  private url = this.serverUrl + this.apiURL;
  tiendas: Tienda[] = [];
  private actualizarFormulario = new BehaviorSubject<Tienda>({} as any);

  //* CONSTRUCTOR
  constructor(private http: HttpClient) {}

  //* MÉTODOS
  guardarTiendaEnBD(tienda: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.url, tienda);
  }

  eliminarTiendaEnBD(id: number | undefined): Observable<Tienda> {
    return this.http.delete<Tienda>(this.url + id);
  }

  obtenerTiendasDeBD() {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        this.tiendas = data as Tienda[];
      });
  }

  actualizarTiendaEnBD(
    id: number | undefined,
    tienda: Tienda
  ): Observable<Tienda> {
    return this.http.put<Tienda>(this.url + id, tienda);
  }

  editarTiendaForm(tienda: Tienda) {
    this.actualizarFormulario.next(tienda);
  }

  obtenerTiendaForma(): Observable<Tienda> {
    return this.actualizarFormulario.asObservable();
  }
}
