import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public livros = [
    "A Cabana",
    "Mauz",
    "Menino do pijama listrado",
    "Naruto",
    "Boruto",
    "Anime"
  ]

}
