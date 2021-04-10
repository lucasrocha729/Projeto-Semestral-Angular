import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produtoModel';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3001/products";


  criar (product : Produto): Observable <Produto>{
    return this.http.post<Produto>(this.url, product)

  }

  listar() : Observable<Produto[]>{

    return this.http.get<Produto[]>(this.url);
  }

  buscaId(id : number) : Observable<Produto>{
    const path = `${this.url}/${id}`
    return this.http.get<Produto>(path);
  }
}
