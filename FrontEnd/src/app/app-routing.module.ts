import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodegaComponent } from './components/bodega/bodega.component';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/bodega/lista-articulos/lista-articulos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaClientesComponent } from './components/bodega/lista-clientes/lista-clientes.component';
import { ListaTiendasComponent } from './components/bodega/lista-tiendas/lista-tiendas.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListaArticulosClienteComponent } from './components/usuario/lista-articulos-cliente/lista-articulos-cliente.component';
import { CarritoComprasComponent } from './components/usuario/carrito-compras/carrito-compras.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'bodega',
    component: BodegaComponent,
    children: [
      { path: 'lista-articulos', component: ListaArticulosComponent },
      { path: 'lista-clientes', component: ListaClientesComponent },
      { path: 'lista-tiendas', component: ListaTiendasComponent },
    ],
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      { path: 'tienda', component: ListaArticulosClienteComponent },
      { path: 'carrito', component: CarritoComprasComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
