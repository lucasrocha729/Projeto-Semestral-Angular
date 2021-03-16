import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos = Produtos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
