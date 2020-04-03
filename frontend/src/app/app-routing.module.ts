import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LayoutComponent } from './shared/layout.page';
import { AdicionarArrecadacaoComponent } from './paginas/adicionar-arrecadacao/adicionar-arrecadacao.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'adicionar-arrecadacao', component: AdicionarArrecadacaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
