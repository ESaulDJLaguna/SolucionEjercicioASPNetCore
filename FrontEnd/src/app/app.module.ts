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
import { ReactiveFormsModule } from '@angular/forms';
import { ArticuloService } from './services/articulo.service';
import { AppRoutingModule } from './app-routing.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ArticuloService],
  bootstrap: [AppComponent],
})
export class AppModule {}
