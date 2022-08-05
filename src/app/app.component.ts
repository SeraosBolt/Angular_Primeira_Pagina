import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeiro-Angular';

  public oculto = false

  public mudarExibicao() {

    this.oculto = !this.oculto

  }
}
