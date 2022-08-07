import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})

export class FilhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  private _nome = ''


  @Input() 
  set nome_filho(nome_filho: string) {
    this._nome = (nome_filho && nome_filho.trim()) || "Nome não informado"
  }

  get nome_filho(): string {return this._nome}

}
