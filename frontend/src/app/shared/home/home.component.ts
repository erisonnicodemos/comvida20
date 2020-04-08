import { Component, OnInit } from '@angular/core';
import { Arrecadacao } from 'src/app/models/arrecadacao.model';
import { HomeService } from 'src/app/services/home.service';
import { Banco } from 'src/app/models/banco.model';
import { Bloco } from 'src/app/models/bloco.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  bancos: Banco[];
  blocos: Bloco[];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.obterBlocos();
    this.obterBancos();
  }

  obterBancos() {
    this.service.obterBancos()
    .subscribe((banco: Banco[]) => {
      this.bancos = banco;
    });
  }

  obterBlocos() {
    this.service.obterBlocos()
    .subscribe((bloco: Bloco[]) => {
      this.blocos = bloco;
    });
  }
  

}
