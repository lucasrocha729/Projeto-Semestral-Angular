import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produtoModel';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  @Input() produto: Produto;
  @Output() acaoClick : EventEmitter <Produto> = new EventEmitter();
  constructor() { 
    this.produto = {} as Produto;
  }
  ngOnInit(): void {
  }

  AddCarrinho(produto: Produto){
    this.acaoClick.emit(produto);
    console.log(produto)
  }
}
