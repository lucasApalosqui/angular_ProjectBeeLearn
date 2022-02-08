import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PerfilEditComponent } from './edit/perfil-edit/perfil-edit.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { GrupoEditComponent } from './edit/grupo-edit/grupo-edit.component';
import { GrupoDeleteComponent } from './delete/grupo-delete/grupo-delete.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    PageComponent,
    HomeComponent,
    GrupoComponent,
    SobreComponent,
    ContatoComponent,
    PerfilEditComponent,
    PostEditComponent,
    GrupoEditComponent,
    GrupoDeleteComponent,
    PostDeleteComponent,
    CadastroComponent,
    EntrarComponent,
  
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
