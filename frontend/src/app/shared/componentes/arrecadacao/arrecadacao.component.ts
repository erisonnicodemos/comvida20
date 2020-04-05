import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from './arrecadacao.model';
import { ArrecadacaoService } from './arrecadacao.service';

@Component({
  selector: 'app-arrecadacao',
  templateUrl: './arrecadacao.component.html'
})
export class ArrecadacaoComponent implements OnInit {

  arrecadacao = {} as Arrecadacao[];
  valor :Arrecadacao ;
  arrecadacoes: Arrecadacao[];
  interval;

  constructor(private arrecadacaoService: ArrecadacaoService) { }

  ngOnInit() {
    this.interval = setInterval(() => { 
      this.obterArrecadacao();
    }, 5000);
  }

  obterArrecadacoes() {
    this.arrecadacaoService.obterArrecadacoes()
    .subscribe((arrecadacoes: Arrecadacao[]) => {
      this.arrecadacao = arrecadacoes;
    });
  }

  obterArrecadacao() {
    this.arrecadacaoService.obterArredacao(1)
    .subscribe((arrecadacao: Arrecadacao) => {
      this.valor = arrecadacao;
    });
  }

}
