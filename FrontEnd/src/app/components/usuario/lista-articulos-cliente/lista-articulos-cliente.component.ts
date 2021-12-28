import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/Articulo';
import { Carrito } from 'src/app/models/Carrito';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-lista-articulos-cliente',
  templateUrl: './lista-articulos-cliente.component.html',
  styleUrls: ['./lista-articulos-cliente.component.css'],
})
export class ListaArticulosClienteComponent implements OnInit {
  //* ATRIBUTOS
  carrito!: Carrito[];
  //* CONSTRUCTOR
  constructor(
    public articuloService: ArticuloService,
    private toastr: ToastrService,
    private carritoService: CarritoService
  ) {}

  //* INTERFACES
  ngOnInit(): void {
    this.articuloService.obtenerArticulosDeBD();
  }

  //* MÉTODOS
  agregarACarrito(
    articulo: Articulo,
    cantidad: HTMLInputElement,
    codigo: string,
    stock: number
  ) {
    const cantidadN = parseInt(cantidad.value);
    this.carrito = this.carritoService.obtenerCarrito();

    if (cantidadN < 0 || isNaN(cantidadN)) {
      this.toastr.error('Elige al menos un artículo');
    } else if (cantidadN > stock) {
      this.toastr.error(
        'No puedes agregar más cantidad de la que hay en stock'
      );
    } else {
      const compra = new Carrito(articulo, cantidadN);

      const existeArticulo =
        this.carritoService.existeArticuloEnCarrito(codigo);

      if (existeArticulo.length === 1) {
        let cantidadNueva =
          this.carritoService.obtenerCantidadActualArticulo(codigo) + cantidadN;

        if (cantidadNueva > stock) {
          this.toastr.error(
            'No puedes agregar más cantidad de la que hay en stock'
          );
        } else {
          this.carritoService.agregaCantidadAArticulo(codigo, cantidadN);
          this.toastr.success('Artículo agregado correctamente al carrito');
        }
      } else {
        this.toastr.success('Artículo agregado correctamente al carrito');
        this.carritoService.agregaCarrito(compra);
      }
    }
  }
}
