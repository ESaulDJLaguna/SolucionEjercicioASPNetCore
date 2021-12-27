import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodegaComponent } from './components/bodega/bodega.component';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/bodega/lista-articulos/lista-articulos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaClientesComponent } from './components/bodega/lista-clientes/lista-clientes.component';
import { ListaTiendasComponent } from './components/bodega/lista-tiendas/lista-tiendas.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'bodega',
    component: BodegaComponent,
    children: [
      { path: 'lista-articulos', component: ListaArticulosComponent },
      { path: 'lista-clientes', component: ListaClientesComponent },
      { path: 'lista-tiendas', component: ListaTiendasComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
