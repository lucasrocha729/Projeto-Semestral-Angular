import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produtoModel';
import { CarrinhoService } from '../../services/carrinho.service';
import { ProdutoService } from '../../services/produto.service';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  produtos : Produto[];
  prod : Produto;
  AddCarrinho(prod : Produto){
    this.carrinho.addCar(prod)
    console.log('Adicionado CARALHOOOOOOOOOOOOOOOOOOOOOOOOOOO')
  }

  constructor(private carrinho: CarrinhoService, private productService : ProdutoService) { 
    this.prod = {} as Produto;
    this.produtos = [];  
  }

  ngOnInit(): void {
    this.productService.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos)
    })
  }

}
