import { Component } from '@angular/core';
import { ConversaoService } from '../servicos/conversao.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.scss']
})
export class ConversorMoedasComponent {
  valor: number;
  moedaOrigem: string;
  moedaDestino: string;
  valorConvertido: number;
  taxaConversao: number;

  constructor(private conversaoService: ConversaoService) {}

  converterMoeda() {
    this.conversaoService.converterMoeda(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe(dados => {
        this.valorConvertido = dados.conversion_result;
        this.taxaConversao = dados.conversion_rate;
  
        // Salvar no histórico
        const historicoConversoes = JSON.parse(localStorage.getItem('historicoConversoes') || '[]');
        historicoConversoes.push({
          data: new Date(),
          valorOrigem: this.valor,
          moedaOrigem: this.moedaOrigem,
          valorDestino: this.valorConvertido,
          moedaDestino: this.moedaDestino,
          taxaConversao: this.taxaConversao
        });
        localStorage.setItem('historicoConversoes', JSON.stringify(historicoConversoes));
      });
  }
  
}
