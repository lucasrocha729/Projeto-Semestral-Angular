import { Produto } from './../models/produtoModel';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  produtos : Produto[];
  produto : Produto;
  constructor(private productService : ProdutoService, private router: Router) {
    this.produtos = [];
    this.produto = {} as Produto;
   }

  ngOnInit(): void {
    this.productService.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos)
    })
  }

  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'deletar', 'editar'];

  deletarProduto(id:number){
    this.productService.excluir(id).subscribe(produto =>{
      this.produto = produto
      window.location.reload()
    })
  }
  
  editarProduto(){
    // this.productService.atualizar(produtos)
  }

}
