import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  //* ATRIBUTOS
  userName!: string;
  password!: string;
  newPass1!: string;
  newPass2!: string;
  existeCliente!: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.obtenerClientesDeBD();
  }

  acceder() {
    let clientes = this.clienteService.clientes;
    this.existeCliente = clientes.filter((cliente) => {
      return cliente.usuario === this.userName;
    });

    if (this.existeCliente.length === 1) {
      if (this.existeCliente[0].password === this.password) {
        if (this.password === '1') {
        } else {
          this.router.navigate(['usuario']);
        }
      } else {
        this.toastr.error(
          'Alguno de los datos es incorrecto',
          'Usuario no Encontrado'
        );
      }
    } else {
      this.toastr.error(
        'Alguno de los datos es incorrecto',
        'Usuario no Encontrado'
      );
    }
  }

  cambiaPassword() {
    if (this.newPass1.length >= 6) {
      if (this.newPass1 === this.newPass2) {
        let cliente = this.existeCliente[0];
        cliente.password = this.newPass1;
        console.log(cliente);
        this.clienteService
          .actualizarClienteEnBD(cliente.idCliente, cliente)
          .subscribe((data) => {
            this.toastr.success(
              'Las contraseñas fue editada de manera satisfactoria',
              'Contraseñas Editada'
            );
            this.router.navigate(['usuario']);
          });
      } else {
        this.toastr.error(
          'Las contraseñas no coinciden',
          'Contraseñas distintas'
        );
      }
    } else {
      this.toastr.error(
        'La contraseña debe ser de al menos 6 caracteres.',
        'Contraseña muy corta'
      );
    }
    this.newPass1 = '';
    this.newPass2 = '';
  }
}
