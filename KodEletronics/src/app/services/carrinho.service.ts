import { Injectable } from '@angular/core'
import { Produto } from '../models/produtoModel'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens : Produto[];
  valorTotal = 0;
  
  constructor( private http: HttpClient ) { 
    this.itens=[]
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
  
  salvar(produto: Produto[]): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.url, produto)
  }

}
