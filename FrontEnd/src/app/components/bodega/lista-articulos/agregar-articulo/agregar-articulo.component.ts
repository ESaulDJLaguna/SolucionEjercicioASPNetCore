import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/Articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css'],
})
export class AgregarArticuloComponent implements OnInit {
  form!: FormGroup;
  subscription!: Subscription;
  articulo!: Articulo;
  idArticulo: number | undefined = 0;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private articuloService: ArticuloService
  ) {
    this.form = this.formBuilder.group({
      id: 0,
      codigo: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.subscription = this.articuloService
      .obtenerTarjetaForm()
      .subscribe((data) => {
        this.articulo = data;
        this.form.patchValue({
          codigo: this.articulo.codigo,
          precio: this.articulo.precio,
          stock: this.articulo.stock,
          descripcion: this.articulo.descripcion,
        });
        this.idArticulo = this.articulo.idArticulo;
      });
  }

  guardarArticulo() {
    if (this.idArticulo === 0 || this.idArticulo === undefined) {
      this.agregar();
    } else {
      this.editar();
    }
  }

  agregar() {
    const articulo = {
      codigo: this.form.get('codigo')?.value,
      precio: this.form.get('precio')?.value,
      stock: this.form.get('stock')?.value,
      descripcion: this.form.get('descripcion')?.value,
    };
    this.articuloService.guardarArticuloEnBD(articulo).subscribe((data) => {
      this.toastr.success(
        'Artículo Agregado',
        'El artículo fue agregado correctamente'
      );
      this.articuloService.obtenerArticulosDeBD();
      this.form.reset();
    });
  }

  editar() {
    const articulo = {
      idArticulo: this.articulo.idArticulo,
      codigo: this.form.get('codigo')?.value,
      precio: this.form.get('precio')?.value,
      stock: this.form.get('stock')?.value,
      descripcion: this.form.get('descripcion')?.value,
    };
    this.articuloService
      .actualizarArticuloEnBD(this.idArticulo, articulo)
      .subscribe((data) => {
        this.toastr.info(
          'Artículo Editado',
          'El artículo fue editado correctamente'
        );
        this.articuloService.obtenerArticulosDeBD();
        this.form.reset();
        this.idArticulo = 0;
      });
  }
}
