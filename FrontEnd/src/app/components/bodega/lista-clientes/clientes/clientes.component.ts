import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  //* CONSTRUCTOR
  constructor(
    public clienteService: ClienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.clienteService.obtenerClientesDeBD();
  }

  eliminarCliente(id: number | undefined) {
    if (confirm('¿Está seguro que quiere eliminar este cliente?')) {
      this.clienteService.eliminarClienteEnBD(id).subscribe((data) => {
        this.toastr.warning(
          'Cliente Eliminado',
          'El cliente fue eliminado satisfactoriamente'
        );
        this.clienteService.obtenerClientesDeBD();
      });
    }
  }

  editarCliente(cliente: Cliente) {
    this.clienteService.editarClienteForm(cliente);
  }
}
