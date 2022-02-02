import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { ComponentMenuRodapeComponent } from './component-menu-rodape/component-menu-rodape.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { GrupoComponent } from './grupo/grupo.component';




@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    ComponentMenuRodapeComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    GrupoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
