import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produtoModel';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  compra : Produto[]
  constructor(private carrinho: CarrinhoService) {
    this.produtos = carrinho.itens;
    this.valorTotal = carrinho.valorTotal;
    this.compra = {} as Produto[]
    console.log(this.produtos);
  }


  ngOnInit(): void {
    for(let i = 0; i<this.produtos.length;i++){
      this.valorTotal += this.produtos[i].price
    }

  }

  produtos: Produto[];
  valorTotal: number;

  // variavelGlobal = 0;


  colunas: string[] = ['index', 'nome', 'descricao', 'preco', 'deletar'];


  deleteRow(index: number) {

    for (let i = 0; i < this.produtos.length; ++i) {
      if (this.produtos[i].id === index) {
        this.produtos.splice(i, 1);
        break;
      }

    }
    let totalCarrinho = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      totalCarrinho += this.produtos[i].price
    }
    this.valorTotal = totalCarrinho;
    // console.log(this.produtos)
  }

  finalizarCompra(){
    // let i =0
    this.carrinho.salvar(this.produtos).subscribe(() => {
      console.log("produto Salvo");
    })
  }



}
