import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Arrecadacao } from '../models/arrecadacao.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArrecadacaoService {
  private headers: HttpHeaders;
  url = 'http://200.221.194.64:8002/api/arrecadacao';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  obterArrecadacoes(): Observable<Arrecadacao[]> {
    return this.http.get<Arrecadacao[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  obterArredacao(id: number): Observable<Arrecadacao> {
    return this.http.get<Arrecadacao>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public atualizar(arrecadacao) {
    return this.http
    .put(this.url + '/' + arrecadacao.id, arrecadacao);
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
