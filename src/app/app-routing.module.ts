import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'historico-conversoes', component: HistoricoConversoesComponent },
  { path: 'lista-moedas', component: ListaMoedasComponent },
  { path: 'conversor-moedas', component: ConversorMoedasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
