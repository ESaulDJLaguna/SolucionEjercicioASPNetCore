import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  //* ATRIBUTOS
  total!: number;

  //* CONSTRUCTOR
  constructor(
    public carritoService: CarritoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  eliminarArticulo(codigo: string) {
    this.toastr.warning('El producto se eliminó del carrito');
    this.carritoService.eliminarArticuloDeCarrito(codigo);
  }

  totalPagar() {
    let total = 0;

    this.carritoService.obtenerCarrito().forEach((element) => {
      total += element.cantidad * element.articulo.precio;
    });
    this.total = total;
    return total;
  }

  realizarPago() {
    if (this.total === 0) {
      this.toastr.error('Elige al menos un artículo', 'Carrito Vacío');
    } else {
      //TODO. GUARDAR DATOS EN LA BASE DE DATOS
      //TODO. DISMINUIR EL STOCK DE LOS ARTÍCULOS AGREGADOS
      this.carritoService.carrito = [];
      this.toastr.success(
        'La compra fue realizada con éxito',
        'Compra realizada'
      );
    }
  }
}
