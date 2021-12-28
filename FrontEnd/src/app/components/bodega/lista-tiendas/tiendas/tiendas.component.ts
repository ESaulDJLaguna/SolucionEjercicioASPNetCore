import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tienda } from 'src/app/models/Tienda';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css'],
})
export class TiendasComponent implements OnInit {
  //* CONSTRUCTOR
  constructor(
    public tiendaService: TiendaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tiendaService.obtenerTiendasDeBD();
  }

  eliminarTienda(id: number | undefined) {
    if (confirm('¿Está seguro que quiere eliminar esta sucursal?')) {
      this.tiendaService.eliminarTiendaEnBD(id).subscribe((data) => {
        this.toastr.warning(
          'Tienda Eliminada',
          'La sucursal fue eliminada con éxito'
        );
        this.tiendaService.obtenerTiendasDeBD();
      });
    }
  }

  editarTienda(tienda: Tienda) {
    this.tiendaService.editarTiendaForm(tienda);
  }
}
