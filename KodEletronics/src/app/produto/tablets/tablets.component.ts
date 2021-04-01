import { Component, OnInit } from '@angular/core';
import { products } from '../../products'
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  produtos = products;
  constructor() { }

  ngOnInit(): void {
  }

}
