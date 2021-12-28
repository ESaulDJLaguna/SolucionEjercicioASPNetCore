import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/Articulo';
import { Carrito } from 'src/app/models/Carrito';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CarritoTiendaService } from 'src/app/services/carrito-tienda.service';

@Component({
  selector: 'app-lista-articulos-tienda',
  templateUrl: './lista-articulos-tienda.component.html',
  styleUrls: ['./lista-articulos-tienda.component.css'],
})
export class ListaArticulosTiendaComponent implements OnInit {
  //* ATRIBUTOS
  carrito!: Carrito[];
  //* CONSTRUCTOR
  constructor(
    public articuloService: ArticuloService,
    private toastr: ToastrService,
    private carritoTiendaService: CarritoTiendaService
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
    this.carrito = this.carritoTiendaService.obtenerCarrito();

    if (cantidadN < 0 || isNaN(cantidadN)) {
      this.toastr.error('Elige al menos un artículo');
    } else if (cantidadN > stock) {
      this.toastr.error(
        'No puedes agregar más cantidad de la que hay en stock'
      );
    } else {
      const compra = new Carrito(articulo, cantidadN);

      const existeArticulo =
        this.carritoTiendaService.existeArticuloEnCarrito(codigo);

      if (existeArticulo.length === 1) {
        let cantidadNueva =
          this.carritoTiendaService.obtenerCantidadActualArticulo(codigo) +
          cantidadN;

        if (cantidadNueva > stock) {
          this.toastr.error(
            'No puedes agregar más cantidad de la que hay en stock'
          );
        } else {
          this.carritoTiendaService.agregaCantidadAArticulo(codigo, cantidadN);
          this.toastr.success('Artículo agregado correctamente al carrito');
        }
      } else {
        this.toastr.success('Artículo agregado correctamente al carrito');
        this.carritoTiendaService.agregaCarrito(compra);
      }
    }
  }
}
