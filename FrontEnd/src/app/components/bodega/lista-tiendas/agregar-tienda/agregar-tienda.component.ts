import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TiendaService } from 'src/app/services/tienda.service';
import { Tienda } from 'src/app/models/Tienda';

@Component({
  selector: 'app-agregar-tienda',
  templateUrl: './agregar-tienda.component.html',
  styleUrls: ['./agregar-tienda.component.css'],
})
export class AgregarTiendaComponent implements OnInit, OnDestroy {
  //* ATRIBUTOS
  form!: FormGroup;
  subscription!: Subscription;
  tienda!: Tienda;
  idTienda: number | undefined = 0;

  //* CONSTRUCTOR
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private tiendaService: TiendaService
  ) {
    this.form = this.formBuilder.group({
      idSucursal: 0,
      sucursal: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }

  //* INTERFACES
  ngOnInit(): void {
    this.subscription = this.tiendaService
      .obtenerTiendaForma()
      .subscribe((data) => {
        this.tienda = data;
        this.form.patchValue({
          sucursal: this.tienda.sucursal,
          direccion: this.tienda.direccion,
        });
        this.idTienda = this.tienda.idSucursal;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //* MÉTODOS
  guardarTienda() {
    if (this.idTienda === 0 || this.idTienda === undefined) {
      this.agregar();
    } else {
      this.editar();
    }
  }

  agregar() {
    const tienda: Tienda = {
      sucursal: this.form.get('sucursal')?.value,
      direccion: this.form.get('direccion')?.value,
    };
    this.tiendaService.guardarTiendaEnBD(tienda).subscribe((data) => {
      this.toastr.success(
        'Sucursal Guardada',
        'La tienda se guardó correctamente'
      );
      this.tiendaService.obtenerTiendasDeBD();
      this.form.reset();
    });
  }

  editar() {
    const tienda: Tienda = {
      idSucursal: this.tienda.idSucursal,
      sucursal: this.form.get('sucursal')?.value,
      direccion: this.form.get('direccion')?.value,
    };
    this.tiendaService
      .actualizarTiendaEnBD(this.idTienda, tienda)
      .subscribe((data) => {
        this.toastr.info(
          'Tienda Editada',
          'La tienda se editó satisfactoriamente'
        );
        this.tiendaService.obtenerTiendasDeBD();
        this.form.reset();
        this.idTienda = 0;
      });
  }
}
