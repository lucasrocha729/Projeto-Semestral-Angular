import { Component, OnInit } from '@angular/core';
import { products } from '../../products'
import { Produto } from '../../models/produtoModel';
import { CarrinhoService } from '../../services/carrinho.service';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  produtos = products;
  prod : Produto;
  AddCarrinho(prod : Produto){
    this.carrinho.addCar(prod)
    console.log('Adicionado CARALHOOOOOOOOOOOOOOOOOOOOOOOOOOO')
  }

  constructor(private carrinho: CarrinhoService) { 
    this.prod = {} as Produto;
  }

  ngOnInit(): void {
  }

}
