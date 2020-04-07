import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from 'src/app/shared/componentes/arrecadacao/arrecadacao.model';
import { ArrecadacaoService } from 'src/app/shared/componentes/arrecadacao/arrecadacao.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adicionar-arrecadacao',
  templateUrl: './adicionar-arrecadacao.component.html'
})

export class AdicionarArrecadacaoComponent implements OnInit {

  arrecadacoes: Arrecadacao[];
  arrecadacao: Arrecadacao;

  constructor(
    private arrecadacaoService: ArrecadacaoService,
    private toastr: ToastrService) { }

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
        this.toastr.success(`Total: ${this.arrecadacao.totalArrecadado} Percentual: ${this.arrecadacao.pencentual}%`, "Valor atualizado!");
       
      },
      err => {
        console.log(err);
      }
    )
  }
 

}
