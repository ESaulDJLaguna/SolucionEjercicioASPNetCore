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
    let existeCliente = clientes.filter((cliente) => {
      return cliente.usuario === this.userName;
    });

    if (existeCliente.length === 1) {
      if (existeCliente[0].password === this.password) {
        this.router.navigate(['usuario']);
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
}
