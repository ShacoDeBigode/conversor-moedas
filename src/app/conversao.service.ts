// src/app/servicos/conversao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversaoService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/SUA_API_KEY';

  constructor(private http: HttpClient) {}

  // Obter todas as moedas e taxas de câmbio
  obterMoedas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/codes`);
  }

  // Obter taxa de câmbio para moeda de origem
  obterTaxasCambio(moedaBase: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest/${moedaBase}`);
  }

  // Função de conversão de moeda
  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pair/${moedaOrigem}/${moedaDestino}/${valor}`);
  }
}
