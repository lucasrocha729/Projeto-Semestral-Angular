import { Router } from '@angular/router';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produtoModel';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  produto:Produto

  constructor(private produtoService: ProdutoService, private router:Router) { 
    this.produto = {} as Produto
  }

  ngOnInit(): void {
  }

  criarProduto(){
    var nome = (<HTMLSelectElement>document.getElementById('nome')).value
    var preco = (<HTMLSelectElement>document.getElementById('preco')).value
    var descricao = (<HTMLSelectElement>document.getElementById('descricao')).value
    var imagem = (<HTMLSelectElement>document.getElementById('imagem')).value
    this.produto.name = nome
    this.produto.price = Number(preco) 
    this.produto.description = descricao
    this.produto.picture = imagem
    console.log(this.produto)
    this.produtoService.criar(this.produto).subscribe(()=>{
     this.produtoService
     this.router.navigate(['/produto'])
   }) 
  }
}
