// conversao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversaoService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/045f56c6a895743ef6b623ff/latest/USD'; 

  constructor(private http: HttpClient) {}

  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number): Observable<any> {
    const url = `${this.apiUrl}/converter?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
    return this.http.get<any>(url);
  }

  obterMoedas(): Observable<any> {
    const url = `${this.apiUrl}/moedas`;
    return this.http.get<any>(url);
  }
}
