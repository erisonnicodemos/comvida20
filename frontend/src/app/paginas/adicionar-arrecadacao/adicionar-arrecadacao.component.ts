import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from 'src/app/models/arrecadacao.model';
import { ArrecadacaoService } from 'src/app/services/arrecadacao.service';

@Component({
  selector: 'app-adicionar-arrecadacao',
  templateUrl: './adicionar-arrecadacao.component.html'
})

export class AdicionarArrecadacaoComponent implements OnInit {

  arrecadacoes: Arrecadacao[];
  arrecadacao: Arrecadacao;

  constructor(
    private arrecadacaoService: ArrecadacaoService) { }

  ngOnInit() {
    this.obterArrecadacao()
  }

  obterArrecadacao() {
    this.arrecadacaoService.obterArredacao(1)
      .subscribe((arrecadacao: Arrecadacao) => {
        this.arrecadacao = arrecadacao;
      });
  }



  atualizar() {
    this.arrecadacaoService.atualizar(this.arrecadacao).subscribe(
      res => {
        alert("Arrecadação atualizada!")
      },
      err => {
        console.log(err);
      }
    )
  }


}
