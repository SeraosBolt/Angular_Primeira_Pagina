import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  paises = ["Brasil", "Estados Unidos", "Japão ", "Israel"];

  @Input() votado: string = ""
  //recebe a string de texto e atribui a nossa variavel
  onVoted(votado: string){
    this.votado = votado;
  }

}
