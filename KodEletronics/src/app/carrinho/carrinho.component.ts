import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produtoModel';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl:'./carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor( private carrinho:CarrinhoService) { 
    this.produtos = carrinho.itens;
  }

  ngOnInit(): void {
  }

  produtos : Produto[];

  colunas: string[] = ['nome', 'descricao', 'preco'];
}
