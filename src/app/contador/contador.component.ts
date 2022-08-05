import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})



export class ContadorComponent implements OnInit {
  
  public numero = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  //Procedimento para aumentar o número do contador
  incrementar() {
    this.numero++
  }
  
  //Procedimento para Diminuir o valor do contador
  subtrair() {
    this.numero--
  }

}
