import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from 'src/app/shared/componentes/arrecadacao/arrecadacao.model';
import { ArrecadacaoService } from 'src/app/shared/componentes/arrecadacao/arrecadacao.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adicionar-arrecadacao',
  templateUrl: './adicionar-arrecadacao.component.html'
})
export class AdicionarArrecadacaoComponent implements OnInit {

  arrecadacao = {} as Arrecadacao[];
  arrecadacoes: Arrecadacao[];
  valor: Arrecadacao;

  constructor(private arrecadacaoService: ArrecadacaoService) { }

  ngOnInit() {
    this.obterArrecadacao()
  }

  obterArrecadacao() {
    this.arrecadacaoService.obterArredacao(1)
    .subscribe((arrecadacao: Arrecadacao) => {
      this.valor = arrecadacao;
    });
  }

  atualizar() {  
      this.arrecadacaoService
      .atualizar(this.valor).subscribe(() => {
    });    
  }


}
