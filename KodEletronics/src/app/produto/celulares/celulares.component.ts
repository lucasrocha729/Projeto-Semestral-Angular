import { Component, OnInit } from '@angular/core';
import { products } from '../../products'
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  produtos = products;
  constructor() { }

  ngOnInit(): void {
  }

}
