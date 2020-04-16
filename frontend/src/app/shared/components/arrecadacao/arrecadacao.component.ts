import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from '../../../models/arrecadacao.model';
import { ArrecadacaoService } from '../../../services/arrecadacao.service';

@Component({
  selector: 'app-arrecadacao',
  templateUrl: './arrecadacao.component.html'
})
export class ArrecadacaoComponent implements OnInit {

  arrecadacao :Arrecadacao ;
  interval;

  constructor(private arrecadacaoService: ArrecadacaoService) { }

  ngOnInit() {
    this.interval = setInterval(() => { 
      this.obterArrecadacao();
    }, 2000);
  }


  obterArrecadacao() {
    this.arrecadacaoService.obterArredacao(1)
    .subscribe((arrecadacao: Arrecadacao) => {
      this.arrecadacao = arrecadacao;
    });
  }

}
