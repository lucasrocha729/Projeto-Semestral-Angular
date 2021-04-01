import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
@Component({
  selector: 'app-eletrodomesticos',
  templateUrl: './eletrodomesticos.component.html',
  styleUrls: ['./eletrodomesticos.component.css']
})
export class EletrodomesticosComponent implements OnInit {
  produtos = products;
  constructor() { }

  ngOnInit(): void {
  }

}
