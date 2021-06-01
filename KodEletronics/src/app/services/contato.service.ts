import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
// import { observable, Observable } from 'rxjs';
import { Contato } from '../models/contatoModel';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/contact"

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  }

  buscarPorId(id: number): Observable<Contato>{
    const path = `${this.url}/${id}`;
    return this.http.get<Contato>(path);
  }

  salvar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato)
  }

  atualizar(contato: Contato): Observable<Contato>{
    const path = `${this.url}/${contato.id}`;
    return this.http.put<Contato>(path, contato)
  }

}
