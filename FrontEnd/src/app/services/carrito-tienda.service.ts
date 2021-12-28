import { Injectable } from '@angular/core';
import { Carrito } from '../models/Carrito';

@Injectable({
  providedIn: 'root',
})
export class CarritoTiendaService {
  private carrito: Carrito[] = [];

  constructor() {}

  agregaCarrito(objeto: Carrito) {
    this.carrito.push(objeto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  agregaCantidadAArticulo(codigo: string, cantidad: number) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].articulo.codigo === codigo) {
        this.carrito[i].cantidad += cantidad;
      }
    }
  }

  existeArticuloEnCarrito(codigo: string): Carrito[] {
    return this.carrito.filter((objeto) => {
      return objeto.articulo.codigo === codigo;
    });
  }

  obtenerCantidadActualArticulo(codigo: string): number {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].articulo.codigo === codigo) {
        return this.carrito[i].cantidad;
      }
    }
    return 0;
  }

  eliminarArticuloDeCarrito(codigo: string) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].articulo.codigo === codigo) {
        this.carrito.splice(i, 1);
      }
    }
  }
}
