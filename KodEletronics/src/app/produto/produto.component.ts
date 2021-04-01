import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos = products;

  constructor() { }

  ngOnInit(): void {
  }

}
