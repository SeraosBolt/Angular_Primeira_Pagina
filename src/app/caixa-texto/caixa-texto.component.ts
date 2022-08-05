import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-texto',
  templateUrl: './caixa-texto.component.html',
  styleUrls: ['./caixa-texto.component.css']
})
export class CaixaTextoComponent{

  onKeyPress(event:any){
    console.log(event.target.value)
  }

}
