import { Injectable } from '@angular/core';
import { Produto } from '../models/produtoModel'
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens : Produto[];
  valorTotal = 0;
  
  constructor() { 
    this.itens=[]
    var valorTotal 
  }

  addCar(produto:Produto){
    this.itens.push(produto);
    // this.valorTotal = this.valorTotal + produto.price;
    // console.log(this.valorTotal)
    
  }
  listarItens(){
    return this.itens;
  }

  // deleteItem(produto : Produto){
  //   this.valorTotal = this.valorTotal + produto.price;
  //   console.log(this.valorTotal)
  // }

  limparCar(){
    this.itens = [];
    return this.itens;
  }


}
