import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../models/contatoModel'
// import { Observable } from 'rxjs/internal/observable'


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato;

  constructor(private service: ContatoService) { 
    this.contato = {} as Contato;
  }



  ngOnInit(): void {
  }



  getContact(contato:Contato) {
    contato.nome = (<HTMLSelectElement>document.getElementById('nameText')).value
    contato.email = (<HTMLSelectElement>document.getElementById('emailText')).value
    contato.mensagem = (<HTMLSelectElement>document.getElementById('contactText')).value


    this.service.salvar(contato).subscribe(() => {
      console.log("contato salvo");
    })
  }
}






