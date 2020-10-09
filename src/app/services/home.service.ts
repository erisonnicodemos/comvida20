import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Banco } from 'src/app/models/banco.model';
import { Bloco } from '../models/bloco.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private headers: HttpHeaders;
  url = 'http://200.221.194.64:8002/api/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  // Obtem todos os bancos cadastrados
  obterBancos(): Observable<Banco[]> {
    return this.http.get<Banco[]>(this.url + 'banco')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem todos os blocos
  obterBlocos(): Observable<Bloco[]> {
    return this.http.get<Bloco[]>(this.url + 'bloco')
      .pipe(
        retry(2),
        catchError(this.handleError))
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
