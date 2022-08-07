import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aux-paises',
  templateUrl: './aux-paises.component.html',
  styleUrls: ['./aux-paises.component.css']
})
export class AuxPaisesComponent{
  @Input() pais: string

  @Output() votado = new EventEmitter<string>();

  vota(pais: string){
    this.votado.emit(pais)
  }

}
