import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { AtualizarProdutoComponent } from './administrador/atualizar-produto/atualizar-produto.component';
import { CarrinhoComponent } from './navegacao/carrinho/carrinho.component';
import { ContatoComponent } from './navegacao/contato/contato.component';
import { CriarProdutoComponent } from './administrador/criar-produto/criar-produto.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './navegacao/login/login.component';
import { ManutencaoComponent } from './navegacao/manutencao/manutencao.component';
import { CelularesComponent } from './produto/celulares/celulares.component';
import { ComputadoresComponent } from './produto/computadores/computadores.component';
import { EletrodomesticosComponent } from './produto/eletrodomesticos/eletrodomesticos.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabletsComponent } from './produto/tablets/tablets.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'manutencao', component: ManutencaoComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'produto',component: ProdutoComponent},
  {path: 'celulares', component: CelularesComponent},
  {path: 'tablets', component:TabletsComponent},
  {path: 'computadores', component: ComputadoresComponent},
  {path: 'eletrodomesticos', component: EletrodomesticosComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'administrador/atualizarProduto/:id', component: AtualizarProdutoComponent},
  {path: 'criarProduto', component:CriarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
