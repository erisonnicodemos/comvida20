import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoacaoComponent } from './paginas/doacao/doacao.component';
import { HomeComponent } from './shared/home/home.component';
import { LayoutComponent } from './shared/layout.page';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'doacao', component: DoacaoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
