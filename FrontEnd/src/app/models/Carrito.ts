import { Articulo } from './Articulo';

export class Carrito {
  constructor(public articulo: Articulo, public cantidad: number) {}
}
