import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  //* ATRIBUTOS
  private serverUrl = 'https://localhost:44367/';
  private apiURL = 'api/Cliente/';
  private url = this.serverUrl + this.apiURL;
  clientes: Cliente[] = [];
  private actualizarFormulario = new BehaviorSubject<Cliente>({} as any);

  //* CONSTRUCTOR
  constructor(private http: HttpClient) {}

  //* MÉTODOS
  guardarClienteEnBD(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  eliminarClienteEnBD(id: number | undefined): Observable<Cliente> {
    return this.http.delete<Cliente>(this.url + id);
  }

  obtenerClientesDeBD() {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        this.clientes = data as Cliente[];
      });
  }

  actualizarClienteEnBD(
    id: number | undefined,
    cliente: Cliente
  ): Observable<Cliente> {
    return this.http.put<Cliente>(this.url + id, cliente);
  }

  editarClienteForm(cliente: Cliente) {
    this.actualizarFormulario.next(cliente);
  }

  obtenerClienteForm(): Observable<Cliente> {
    return this.actualizarFormulario.asObservable();
  }
}
