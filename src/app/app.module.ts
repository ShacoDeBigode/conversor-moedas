import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'; // Se você estiver usando a ordenação
import { AppComponent } from './app.component';
import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoConversoesComponent,
    ListaMoedasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, // Se você estiver usando a ordenação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
