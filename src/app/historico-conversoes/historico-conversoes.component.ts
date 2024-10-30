import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConversaoService } from '../servicos/conversao.service';

interface HistoricoConversao {
  data: Date;
  valorOrigem: number;
  moedaOrigem: string;
  valorDestino: number;
  moedaDestino: string;
  taxaConversao: number;
}

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico-conversoes.component.html',
  styleUrls: ['./historico-conversoes.component.scss']
})
export class HistoricoConversoesComponent implements OnInit {
  colunasExibidas: string[] = ['data', 'valorOrigem', 'moedaOrigem', 'valorDestino', 'moedaDestino', 'taxaConversao', 'acoes'];
  dataSource = new MatTableDataSource<HistoricoConversao>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    const historico = localStorage.getItem('historicoConversoes');
    if (historico) {
      this.dataSource.data = JSON.parse(historico);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  excluirHistorico(item: HistoricoConversao) {
    this.dataSource.data = this.dataSource.data.filter(h => h !== item);
    localStorage.setItem('historicoConversoes', JSON.stringify(this.dataSource.data));
  }
}
