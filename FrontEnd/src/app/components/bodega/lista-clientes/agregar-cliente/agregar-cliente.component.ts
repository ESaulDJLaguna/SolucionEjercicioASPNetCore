import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
})
export class AgregarClienteComponent implements OnInit, OnDestroy {
  //* ATRIBUTOS
  form!: FormGroup;
  subscription!: Subscription;
  cliente!: Cliente;
  idCliente: number | undefined = 0;

  //* CONSTRUCTOR
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {
    this.form = this.formBuilder.group({
      idCliente: 0,
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      password: '1',
    });
  }

  //* INTERFACES
  ngOnInit(): void {
    this.subscription = this.clienteService
      .obtenerClienteForm()
      .subscribe((data) => {
        this.cliente = data;
        this.form.patchValue({
          nombres: this.cliente.nombres,
          apellidos: this.cliente.apellidos,
          direccion: this.cliente.direccion,
          usuario: this.cliente.usuario,
        });
        this.idCliente = this.cliente.idCliente;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //* MÉTODOS
  guardarCliente() {
    if (this.idCliente === 0 || this.idCliente === undefined) {
      this.agregar();
    } else {
      this.editar();
    }
  }

  agregar() {
    const cliente: Cliente = {
      nombres: this.form.get('nombres')?.value,
      apellidos: this.form.get('apellidos')?.value,
      direccion: this.form.get('direccion')?.value,
      usuario: this.form.get('usuario')?.value,
      password: '1',
    };
    this.clienteService.guardarClienteEnBD(cliente).subscribe((data) => {
      this.toastr.success('Cliente Guarddo', 'El cliente se guardo con éxito.');
      this.clienteService.obtenerClientesDeBD();
      this.form.reset();
    });
  }

  editar() {
    const cliente: Cliente = {
      idCliente: this.cliente.idCliente,
      nombres: this.form.get('nombres')?.value,
      apellidos: this.form.get('apellidos')?.value,
      direccion: this.form.get('direccion')?.value,
      usuario: this.form.get('usuario')?.value,
      password: this.cliente.password,
    };
    this.clienteService
      .actualizarClienteEnBD(this.idCliente, cliente)
      .subscribe((data) => {
        this.toastr.info(
          'Cliente Editado',
          'El cliente fue editado satisfactoriamente'
        );
        this.clienteService.obtenerClientesDeBD();
        this.form.reset();
        this.idCliente = 0;
      });
  }
}
