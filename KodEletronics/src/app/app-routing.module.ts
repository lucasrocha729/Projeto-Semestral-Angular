import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'produto',component: ProdutoComponent},
  {path: 'manutencao', component: ManutencaoComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
