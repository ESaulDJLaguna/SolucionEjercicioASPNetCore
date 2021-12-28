import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritoTiendaService } from 'src/app/services/carrito-tienda.service';

@Component({
  selector: 'app-pedir-bodega',
  templateUrl: './pedir-bodega.component.html',
  styleUrls: ['./pedir-bodega.component.css'],
})
export class PedirBodegaComponent implements OnInit {
  //* ATRIBUTOS
  total!: number;

  //* CONSTRUCTOR
  constructor(
    public carritoTiendaService: CarritoTiendaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  eliminarArticulo(codigo: string) {
    this.toastr.warning('El producto se eliminó del carrito');
    this.carritoTiendaService.eliminarArticuloDeCarrito(codigo);
  }

  totalPagar() {
    let total = 0;

    this.carritoTiendaService.obtenerCarrito().forEach((element) => {
      total += element.cantidad * element.articulo.precio;
    });
    this.total = total;
    return total;
  }

  realizarPago() {
    if (this.total === 0) {
      //TODO. GUARDAR DATOS EN LA BASE DE DATOS
      //TODO. DISMINUIR EL STOCK DE LOS ARTÍCULOS AGREGADOS
      //TODO. LIMPIAR EL CARRITO DE COMPRAS
      this.toastr.error('Elige al menos un artículo', 'Carrito Vacío');
    } else {
      console.log(this.total);
    }
  }
}
