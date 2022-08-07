import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlaMundoComponent } from './ola-mundo/ola-mundo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { CaixaTextoComponent } from './caixa-texto/caixa-texto.component';
import { Componente1Component } from './componente1/componente1.component';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaMundoComponent,
    ContadorComponent,
    ListaLivrosComponent,
    CaixaTextoComponent,
    Componente1Component,
    Component2Component,
    Component1Component,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
