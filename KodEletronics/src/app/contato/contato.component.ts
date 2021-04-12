import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {



  constructor(private http: HttpClient) { }
  url = "http://localhost:3001/contact/"

  // criar(dataContactServer: []): Observable<[]> {
  //   return this.http.post<[]>(this.url, dataContactServer)
  // }


  ngOnInit(): void {
  }

  // dataContactServer = []
  newObject = [{
    "nome": "",
    "email": "",
    "mensagem": ""
  }]


  getContact(): Observable<[]> {
    var nome = (<HTMLSelectElement>document.getElementById('nameText')).value
    var email = (<HTMLSelectElement>document.getElementById('emailText')).value
    var message = (<HTMLSelectElement>document.getElementById('contactText')).value
    var dataContact = [{
      "nome": nome,
      "email": email,
      "mensagem": message
    }]
    
    console.log(dataContact)
    return this.http.post<[]>(this.url, dataContact)
  }





}
