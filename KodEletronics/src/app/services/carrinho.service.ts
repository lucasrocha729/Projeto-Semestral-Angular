import { Injectable } from '@angular/core';
import { Produto } from '../models/produtoModel'
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens : Produto[];

  constructor() { 
    this.itens=[]
  }
  addCar(produto:Produto){
    this.itens.push(produto);
  }
  listarItens(){
    return this.itens;
  }

  limparCar(){
    this.itens = [];
    return this.itens;
  }







}
