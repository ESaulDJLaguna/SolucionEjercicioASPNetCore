import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { ListaArticulosComponent } from './components/bodega/lista-articulos/lista-articulos.component';
import { ListaClientesComponent } from './components/bodega/lista-clientes/lista-clientes.component';
import { ListaTiendasComponent } from './components/bodega/lista-tiendas/lista-tiendas.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBodegaComponent } from './components/bodega/menu-bodega/menu-bodega.component';
import { AgregarArticuloComponent } from './components/bodega/lista-articulos/agregar-articulo/agregar-articulo.component';
import { ArticulosComponent } from './components/bodega/lista-articulos/articulos/articulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticuloService } from './services/articulo.service';
import { AppRoutingModule } from './app-routing.module';
import { ClienteService } from './services/cliente.service';
import { AgregarClienteComponent } from './components/bodega/lista-clientes/agregar-cliente/agregar-cliente.component';
import { ClientesComponent } from './components/bodega/lista-clientes/clientes/clientes.component';
import { TiendasComponent } from './components/bodega/lista-tiendas/tiendas/tiendas.component';
import { AgregarTiendaComponent } from './components/bodega/lista-tiendas/agregar-tienda/agregar-tienda.component';
import { TiendaService } from './services/tienda.service';
import { AuthComponent } from './components/auth/auth.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MenuClienteComponent } from './components/usuario/menu-cliente/menu-cliente.component';
import { CarritoComprasComponent } from './components/usuario/carrito-compras/carrito-compras.component';
import { ListaArticulosClienteComponent } from './components/usuario/lista-articulos-cliente/lista-articulos-cliente.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { PedirBodegaComponent } from './components/tienda/pedir-bodega/pedir-bodega.component';
import { ListaArticulosTiendaComponent } from './components/tienda/lista-articulos-tienda/lista-articulos-tienda.component';
import { MenuTiendaComponent } from './components/tienda/menu-tienda/menu-tienda.component';
import { CarritoTiendaService } from './services/carrito-tienda.service';
import { CarritoService } from './services/carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    BodegaComponent,
    ListaArticulosComponent,
    ListaClientesComponent,
    ListaTiendasComponent,
    MenuComponent,
    MenuBodegaComponent,
    AgregarArticuloComponent,
    ArticulosComponent,
    AgregarClienteComponent,
    ClientesComponent,
    TiendasComponent,
    AgregarTiendaComponent,
    AuthComponent,
    UsuarioComponent,
    MenuClienteComponent,
    CarritoComprasComponent,
    ListaArticulosClienteComponent,
    TiendaComponent,
    PedirBodegaComponent,
    ListaArticulosTiendaComponent,
    MenuTiendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [
    ArticuloService,
    ClienteService,
    TiendaService,
    CarritoService,
    CarritoTiendaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
