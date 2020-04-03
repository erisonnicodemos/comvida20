import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Arrecadacao } from './arrecadacao.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArrecadacaoService {
 

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:3000/arrecadacao'; 
   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  obterArrecadacoes(): Observable<Arrecadacao[]> {
    return this.httpClient.get<Arrecadacao[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  obterArredacao(id: number): Observable<Arrecadacao> {
    return this.httpClient.get<Arrecadacao>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  atualizar(arrecadacao: Arrecadacao): Observable<Arrecadacao> {
    return this.httpClient.put<Arrecadacao>(this.url + '/' + arrecadacao.id, JSON.stringify(arrecadacao), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
