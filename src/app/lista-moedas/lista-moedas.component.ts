import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConversaoService } from '../servicos/conversao.service';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.scss']
})
export class ListaMoedasComponent implements OnInit {
  colunasExibidas: string[] = ['simbolo', 'nome'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private conversaoService: ConversaoService) {}

  ngOnInit() {
    this.conversaoService.obterMoedas().subscribe(dados => {
      this.dataSource.data = dados;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  aplicarFiltro(evento: Event) {
    const valorFiltro = (evento.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }
}
