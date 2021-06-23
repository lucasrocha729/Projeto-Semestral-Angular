import { ComponentFactoryResolver, Injectable, ɵɵsetComponentScope } from '@angular/core'
import { Produto } from '../models/produtoModel'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Order } from '../models/orderModel'

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens : Produto[];
  order : Order;
  valorTotal = 0;
  
  constructor( private http: HttpClient ) { 
    this.itens=[],
    this.order = {} as Order;
  }
  url = "http://localhost:3000/order"

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
  
  salvar(produtos: Produto[]): Observable<Produto[]> {
    let valorTotalzao = 0;
    this.order.itens = produtos;

    this.order.itens.forEach(produto => {
      valorTotalzao += produto.price;
    });

    this.order.total = valorTotalzao;

    return this.http.post<Produto[]>(this.url, this.order);
  }

}
