import { Component, OnInit } from '@angular/core';
import { products } from '../../products'
import { Produto } from '../../models/produtoModel';
import { CarrinhoService } from '../../services/carrinho.service';


@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
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
