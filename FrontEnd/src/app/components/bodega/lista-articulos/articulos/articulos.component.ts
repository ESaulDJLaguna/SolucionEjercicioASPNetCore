import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/Articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  constructor(
    public articuloService: ArticuloService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.articuloService.obtenerArticulosDeBD();
  }

  eliminarArticulo(id: number | undefined) {
    if (confirm('¿Está seguro que quiere eliminar este registro?')) {
      this.articuloService.eliminarArticuloEnBD(id).subscribe((data) => {
        this.toastr.warning('Articulo eliminado', 'El artículo fue eliminado.');
        this.articuloService.obtenerArticulosDeBD();
      });
    }
  }

  editarArticulo(articulo: Articulo) {
    this.articuloService.editarArticuloForm(articulo);
  }
}
