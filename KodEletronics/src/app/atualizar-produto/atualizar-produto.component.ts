import { Produto } from './../models/produtoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  produto:Produto

  constructor( private produtoService : ProdutoService, private router: Router, private route:ActivatedRoute) { 
    this.produto = {} as Produto
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.buscaId(Number(id)).subscribe(produto =>{
      this.produto=produto
    });
  }

  atualizarProduto(){
    this.produtoService.atualizar(this.produto).subscribe(()=>{
    this.router.navigate(["/produto"])  
    })
  }
}
