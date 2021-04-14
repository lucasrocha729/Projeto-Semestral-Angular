import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ManutencaoComponent } from './navegacao/manutencao/manutencao.component';
import { ContatoComponent } from './navegacao/contato/contato.component';
import { LoginComponent } from './navegacao/login/login.component';
import { CarrinhoComponent } from './navegacao/carrinho/carrinho.component';
import {MatCardModule} from '@angular/material/card';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CelularesComponent } from './produto/celulares/celulares.component';
import { TabletsComponent } from './produto/tablets/tablets.component';
import { ComputadoresComponent } from './produto/computadores/computadores.component';
import { EletrodomesticosComponent } from './produto/eletrodomesticos/eletrodomesticos.component';
import { CategoriaProdutosComponent } from './navegacao/categoria-produtos/categoria-produtos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ComprarComponent } from './produto/comprar/comprar.component';
import {MatTableModule} from '@angular/material/table';
import { AdministradorComponent } from './administrador/administrador.component';
import { AtualizarProdutoComponent } from './administrador/atualizar-produto/atualizar-produto.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { CriarProdutoComponent } from './administrador/criar-produto/criar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutoComponent,
    ManutencaoComponent,
    ContatoComponent,
    LoginComponent,
    CarrinhoComponent,
    NavegacaoComponent,
    CelularesComponent,
    TabletsComponent,
    ComputadoresComponent,
    EletrodomesticosComponent,
    CategoriaProdutosComponent,
    ComprarComponent,
    AdministradorComponent,
    AtualizarProdutoComponent,
    CriarProdutoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
